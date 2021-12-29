import React from "react";
import { useEffect, useState } from "react";

import s from "./ModalProduct.module.css";
import Products from "../Products/Products";

const INITIAL_STATE = {
  name: "",
  count: "",
  weight: "",
  width: "",
  height: "",
  comments: "",
  isFullTime: false,
};

const ModalProduct = ({ onCloseForm }) => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [newProduct, setNewProduct] = useState({});
  const [products, setProducts] = useState([]);

  const addProducts = () => {
    setProducts([...newProduct]);
  };

  console.log(`products`, products);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckBox = type === "checkbox";
    setFormData({
      ...formData,
      [name]: isCheckBox ? checked : value,
    });
  };

  useEffect(() => {
    const onEscPress = (e) => {
      if (e.code === "Escape") {
        onCloseForm();
      }
    };

    window.addEventListener("keydown", onEscPress);
    return () => {
      window.removeEventListener("keydown", onEscPress);
    };
  }, [onCloseForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewProduct({
      ...formData,
    });
    reset();
    // onCloseForm();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseForm();
    }
  };

  const reset = () => {
    setFormData({ ...INITIAL_STATE });
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <div>
          <header className={s.header}>
            <button
              type="button"
              className={s.closeBtn}
              onClick={onCloseForm}
              aria-label="Close"
            >
              &times;
            </button>
          </header>

          <div>
            <h2 className={s.title}>Main information about product</h2>
            <form action="" className={s.form} onSubmit={handleSubmit}>
              <label htmlFor="" className={s.label}>
                name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="input name product"
                  required
                  onChange={handleChange}
                  className={s.input}
                />
              </label>
              <label htmlFor="" className={s.label}>
                count
                <input
                  type="number"
                  name="count"
                  value={formData.count}
                  placeholder="input count"
                  required
                  onChange={handleChange}
                  className={s.input}
                />
              </label>
              <label htmlFor="" className={s.label}>
                weight
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  placeholder="input weight"
                  required
                  onChange={handleChange}
                  className={s.input}
                />
              </label>
              <div>
                <label htmlFor="" className={s.label}>
                  width
                  <input
                    type="text"
                    name="width"
                    value={formData.width}
                    placeholder="input width"
                    required
                    onChange={handleChange}
                    className={s.input}
                  />
                </label>
                <label htmlFor="" className={s.label}>
                  height
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    placeholder="input height"
                    required
                    onChange={handleChange}
                    className={s.input}
                  />
                </label>
              </div>
              <label htmlFor="" className={s.label}>
                comments
                <input
                  type="text"
                  name="comments"
                  value={formData.comments}
                  placeholder="input comments"
                  onChange={handleChange}
                  className={s.input}
                />
              </label>
              <div className={s.check}>
                <p> I'am stuff of this company</p>
                <input
                  name="isFullTime"
                  type="checkbox"
                  checked={formData.isFullTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={s.btnModal}>
                <button
                  type="submit"
                  text="Confirm"
                  className={s.button}
                  //   onSubmit={handleSubmit}
                >
                  Confirm
                </button>
                <button
                  type="submit"
                  text="Cancel"
                  className={s.button}
                  onClick={onCloseForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Products newProduct={newProduct} />
    </div>
  );
};

export default ModalProduct;
