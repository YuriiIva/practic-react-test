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

  const onNewProduct = (prod) => {
    console.log(`prod`, prod);
    setNewProducts([...newProducts, prod]);
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
          <ModalProduct onCloseForm={toggleForm} onNewProduct={onNewProduct} />
        </Modal>
      )}
      {/* <Filter /> */}
      {newProducts.length && <Products products={newProducts} />}
      {/* <Modal>
        <ModalChange />
      </Modal> */}
    </div>
  );
};

export default Shop;
