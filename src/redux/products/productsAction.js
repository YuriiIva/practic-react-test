// import { TYPE } from "./productsTypes";
import { createAction } from "@reduxjs/toolkit";

const setProducts = createAction("products/items_set");
const addProduct = createAction("products/items_add");
const editProduct = createAction("products/items_edit");
const deleteProduct = createAction("products/items_delete");
const changeFilter = createAction("products/filter_change");

/////////// без библиотеки toolkit//////////

// const setProducts = (products) => ({
//   type: TYPE.SET,
//   payload: products,
// });

// const addProduct = (product) => ({
//   type: TYPE.ADD,
//   payload: product,
// });

// const editProduct = (product) => ({
//   type: TYPE.EDIT,
//   payload: product,
// });

// const deleteProduct = (id) => ({
//   type: TYPE.DELETE,
//   payload: id,
// });
// const changeFilter = (value) => ({
//   type: TYPE.FILTER,
//   payload: value,
// });

export { setProducts, addProduct, editProduct, deleteProduct, changeFilter };
