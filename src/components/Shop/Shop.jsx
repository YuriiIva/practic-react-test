import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProducts,
  editProduct,
  deleteProduct,
} from "../../redux/products/productsAction";
import ModalProduct from "../ModalProduct/ModalProduct";
import Filter from "components/Filter/Filter";
import Products from "components/Products/Products";
import Modal from "components/common/Modal/Modal";
import ModalChange from "components/ModalChange/ModalChange";
import * as Api from "services/Api";

const API_ANDPOINT = "products";

const Shop = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isChangeFormOpen, setIsChangeFormOpen] = useState(false);
  const [idChange, setIdChange] = useState("");
  const [activeProduct, setActiveProduct] = useState(null);
  const [editProductS, setEditProductS] = useState({});

  const allProducts = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  /////set////////

  useEffect(() => {
    const setProducts1 = async () => {
      const products = await Api.getData(API_ANDPOINT);
      dispatch(setProducts([...products]));
    };
    setProducts1();
  }, [dispatch]);

  ////////// edit ///////////

  const handleBtnChange = (id) => {
    setIsChangeFormOpen(true);
    setIdChange(id);
  };

  const onEdit = () => {
    setEditProductS(
      ...allProducts.filter((newProduct) => newProduct.id === idChange)
    );
    setIsChangeFormOpen(false);
    setIsFormOpen(true);
  };

  const changeProductName = (changeProd) => {
    if (editProductS.name === changeProd) return;

    setActiveProduct({ ...editProductS, name: changeProd });
  };

  useEffect(() => {
    if (!activeProduct) return;

    const onEditProducts = async () => {
      const newEditProduct = await Api.editItem(API_ANDPOINT, activeProduct);
      dispatch(editProduct(newEditProduct));
    };
    onEditProducts();
  }, [activeProduct]);

  /////////// Delete //////////

  const onDelete = async () => {
    const deleteProd = await Api.deleteItem(API_ANDPOINT, idChange);
    dispatch(deleteProduct(deleteProd.id));
    setIsChangeFormOpen(false);
    setIdChange("");
  };

  const onCloseChanegForm = () => {
    setIsChangeFormOpen(false);
  };

  const toggleForm = () => {
    setIsFormOpen((prevIsFormopen) => !prevIsFormopen);
    setEditProductS("");
    setIsChangeFormOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={toggleForm} className="mainBtn">
        Add Product
      </button>
      {isFormOpen && (
        <Modal onCloseForm={toggleForm}>
          <ModalProduct
            onCloseForm={toggleForm}
            // onNewProduct={onNewProduct}
            editProductModal={editProductS}
            changeProductName={changeProductName}
          />
        </Modal>
      )}

      {allProducts.length > 0 && <Filter />}
      {allProducts.length > 0 && (
        <Products
          // products={newProducts}
          // onSerchProduct={onSerchProduct}
          handleBtnChange={handleBtnChange}
        />
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
