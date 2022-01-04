import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, addProduct } from "../../redux/products/productsAction";
import * as Api from "services/Api";

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

const API_ANDPOINT = "products";

const ModalProduct = ({
  onCloseForm,
  onNewProduct,
  editProductModal,
  changeProductName,
}) => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [product, setProduct] = useState(null);

  const [name, setName] = useState("");
  const [isModalEditOpen, setIsModalEditOpen] = useState(() =>
    editProductModal ? true : false
  );
  const allProducts = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  /////add/////

  // const onNewProduct = (prod) => {
  //   dispatch(addProduct(prod));
  //   // setNewProducts([...newProducts, prod]);
  // };

  useEffect(() => {
    if (!product) return;
    const addNewProduct = async () => {
      const newProducts = await Api.saveItem(API_ANDPOINT, product);
      dispatch(addProduct(newProducts));
      // onNewProduct(newProducts);
      setProduct(null);
      onCloseForm();
    };
    addNewProduct();
  }, [dispatch, product]);

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

  // /////Edit ////////

  useEffect(() => {
    if (!editProductModal) return;

    setIsModalEditOpen(true);
    setName(editProductModal.name);
  }, [editProductModal]);

  const handleEdit = (e) => {
    setName(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    changeProductName(name);
    setIsModalEditOpen(false);
    setName("");
    onCloseForm();
  };

  return (
    <div>
      <h2 className={s.title}>
        {!isModalEditOpen
          ? "Main information about product"
          : "Edit product name"}
      </h2>

      {!isModalEditOpen && (
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
              type="number"
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
                type="number"
                name="width"
                value={formData.width}
                placeholder="input width"
                required
                onChange={handleChange}
                className={s.input}
              />
            </label>
            <label htmlFor="" className={s.label}>
              hight
              <input
                type="number"
                name="hight"
                value={formData.hight}
                placeholder="input hight"
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
      )}
      {isModalEditOpen && (
        <form action="" className={s.form} onSubmit={handleEditSubmit}>
          <label htmlFor="" className={s.label}>
            name
            <input
              type="text"
              name="name"
              value={name}
              placeholder="input name product"
              required
              onChange={handleEdit}
              className={s.input}
            />
          </label>
          <div className={s.btnModal}>
            <button type="submit" text="Confirm" className={s.button}>
              Edit
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
      )}
    </div>
  );
};

export default ModalProduct;
