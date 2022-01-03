import React from "react";
import { useState, useEffect } from "react";
import ModalProduct from "../ModalProduct/ModalProduct";
import Filter from "components/Filter/Filter";
import Products from "components/Products/Products";
import Modal from "components/common/Modal/Modal";
import ModalChange from "components/ModalChange/ModalChange";
import * as Api from "services/Api";

const API_ANDPOINT = "products";

const Shop = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newProducts, setNewProducts] = useState([]);
  const [isChangeFormOpen, setIsChangeFormOpen] = useState(false);
  const [idChange, setIdChange] = useState("");
  const [changeName, setChangeName] = useState("");
  const [activeProduct, setActiveProduct] = useState({});
  const [editProduct, setEditProduct] = useState({});
  const [filter, setFilter] = useState("");

  /////set////////

  useEffect(() => {
    const setProducts = async () => {
      const products = await Api.getData(API_ANDPOINT);
      setNewProducts([...products]);
    };
    setProducts();
  }, []);

  const onNewProduct = (prod) => {
    setNewProducts([...newProducts, prod]);
  };

  const handleBtnChange = (id) => {
    setIsChangeFormOpen(true);
    setIdChange(id);
  };

  ////////// edit ///////////

  const onEdit = () => {
    setEditProduct(
      ...newProducts.filter((newProduct) => newProduct.id === idChange)
    );
    setIsChangeFormOpen(false);
    setIsFormOpen(true);
  };

  const changeProductName = async (changeProd) => {
    if (editProduct.name === changeProd) return;

    // if (!changeProd) return;
    console.log(`changeProd`, changeProd);
    console.log(`editProduct`, editProduct.name);
    setActiveProduct({ ...editProduct, name: changeProd });

    const newEditProduct = await Api.editItem(API_ANDPOINT, activeProduct);
    console.log(`newEditProduct`, newEditProduct);
  };
  // console.log(`activeProduct`, activeProduct);

  // useEffect(() => {
  //   if (!activeProduct) return;
  //   // console.log(`activeProduct`, activeProduct);

  //   const onEditProducts = async () => {
  //     const newEditProduct = await Api.editItem(API_ANDPOINT, activeProduct);
  //     console.log(`newEditProduct`, newEditProduct);
  //   };
  //   onEditProducts();
  // }, [activeProduct]);

  /////////// Delete //////////

  const onDelete = async () => {
    const deleteProd = await Api.deleteItem(API_ANDPOINT, idChange);
    setNewProducts(
      newProducts.filter((newProduct) => newProduct.id !== idChange)
    );
    setIsChangeFormOpen(false);
    setIdChange("");
  };

  const onCloseChanegForm = () => {
    setIsChangeFormOpen(false);
  };

  const toggleForm = () => {
    setIsFormOpen((prevIsFormopen) => !prevIsFormopen);
    setEditProduct("");
  };

  //////////Filter ////////////

  const onSerchProduct = (searchProd) => {
    if (!searchProd) return;
    return newProducts.filter((newProduct) =>
      newProduct.name.toLowerCase().includes(searchProd.toLowerCase())
    );
  };

  return (
    <div>
      <button type="button" onClick={toggleForm} className="mainBtn">
        Add Product
      </button>
      {isFormOpen && onNewProduct && (
        <Modal onCloseForm={toggleForm}>
          <ModalProduct
            onCloseForm={toggleForm}
            onNewProduct={onNewProduct}
            editProductModal={editProduct}
            changeProductName={changeProductName}
          />
        </Modal>
      )}

      {newProducts.length > 0 && <Filter onSerchProduct={onSerchProduct} />}
      {newProducts.length > 0 && (
        <Products products={newProducts} handleBtnChange={handleBtnChange} />
      )}
      {isChangeFormOpen && (
        <Modal onCloseForm={onCloseChanegForm}>
          <ModalChange onDelete={onDelete} onEdit={onEdit} />
        </Modal>
      )}
    </div>
  );
};

export default Shop;
