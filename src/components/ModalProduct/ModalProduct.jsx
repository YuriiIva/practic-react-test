import React from "react";
import { useEffect, useState } from "react";

import s from "./ModalProduct.module.css";

import { nanoid } from "nanoid";

const INITIAL_STATE = {
  name: "",
  count: "",
  weight: "",
  width: "",
  height: "",
  comments: "",
  isFullTime: false,
};

const ModalProduct = ({ onCloseForm, onNewProduct, editProduct }) => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [product, setProduct] = useState(null);

  console.log(`editProduct`, editProduct);

  useEffect(() => {
    if (!product) return;
    const addNewProduct = () => {
      onNewProduct(product);
      setProduct(null);
      onCloseForm();
    };
    addNewProduct();
  }, [onCloseForm, onNewProduct, product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct(formData);
    reset();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckBox = type === "checkbox";
    setFormData({
      ...formData,
      [name]: isCheckBox ? checked : value,
      id: nanoid(),
    });
  };

  const reset = () => {
    setFormData({ ...INITIAL_STATE });
  };

  return (
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
          <button type="submit" text="Confirm" className={s.button}>
            Confirm
          </button>
          <button
            type="button"
            text="Cancel"
            className={s.button}
            onClick={onCloseForm}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalProduct;
