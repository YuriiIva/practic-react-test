import { TYPE } from "./productsTypes";

const setProducts = (products) => ({
  type: TYPE.SET,
  payload: products,
});

const addProduct = (product) => ({
  type: TYPE.ADD,
  payload: product,
});

const editProduct = (product) => ({
  type: TYPE.EDIT,
  payload: product,
});

const deleteProduct = (product) => ({
  type: TYPE.DELETE,
  payload: product,
});
const changeFilter = (value) => ({
  type: TYPE.FILTER,
  payload: value,
});

export { setProducts, addProduct, editProduct, deleteProduct, changeFilter };
