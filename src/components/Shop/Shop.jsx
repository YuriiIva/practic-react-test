import React from "react";
import { useState } from "react";
import ModalProduct from "../ModalProduct/ModalProduct";
import Filter from "components/Filter/Filter";
import Products from "components/Products/Products";
import Modal from "components/common/Modal/Modal";
import ModalChange from "components/ModalChange/ModalChange";

const Shop = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newProducts, setNewProducts] = useState([]);
  const [isChangeFormOpen, setIsChangeFormOpen] = useState(false);
  const [idChange, setIdChange] = useState("");
  const [editProduct, setEditProduct] = useState("");

  const onNewProduct = (prod) => {
    setNewProducts([...newProducts, prod]);
  };

  const handleBtnChange = (id) => {
    setIsChangeFormOpen(true);
    setIdChange(id);
  };

  const onDelete = () => {
    setNewProducts(
      newProducts.filter((newProduct) => newProduct.id !== idChange)
    );
    setIsChangeFormOpen(false);
    //   setIdChange("")
  };

  const onCloseChanegForm = () => {
    setIsChangeFormOpen(false);
  };

  const onEdit = () => {
    setEditProduct(
      newProducts.filter((newProduct) => newProduct.id === idChange)
    );
  };

  const toggleForm = () => {
    setIsFormOpen((prevIsFormopen) => !prevIsFormopen);
  };

  return (
    <div>
      <button type="button" onClick={toggleForm}>
        Add Product
      </button>
      {isFormOpen && (
        <Modal onCloseForm={toggleForm}>
          <ModalProduct
            onCloseForm={toggleForm}
            onNewProduct={onNewProduct}
            editProduct={editProduct}
          />
        </Modal>
      )}
      {/* <Filter /> */}
      {newProducts.length && (
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
