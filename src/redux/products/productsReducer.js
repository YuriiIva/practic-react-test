// import { combineReducers } from "redux";
// import { TYPE } from "./productsTypes";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  setProducts,
  addProduct,
  editProduct,
  deleteProduct,
  changeFilter,
} from "./productsAction";

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(setProducts, (_, action) => action.payload)
    .addCase(addProduct, (state, action) => [...state, action.payload])
    .addCase(editProduct, (state, action) =>
      state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      )
    )
    .addCase(deleteProduct, (state, action) =>
      state.filter((product) => product.id !== action.payload.id)
    );
});

const filterReducer = createReducer("", (builder) => {
  builder.addCase(changeFilter, (state, action) => action.payload);
});

/////////// без библиотеки toolkit//////////

// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case TYPE.SET:
//       return action.payload;

//     case TYPE.ADD:
//       return [...state, action.payload];

//     case TYPE.EDIT:
//       return state.map((product) =>
//         product.id === action.payload.id ? action.payload : product
//       );

//     case TYPE.DELETE:
//       return state.filter((product) => product.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case TYPE.FILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };

const productsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default productsReducer;
