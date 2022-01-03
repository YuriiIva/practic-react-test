// {
//     products: {
//         items: [],
//         filter:""
//     }
// }

import { combineReducers } from "redux";
import { TYPE } from "./productsTypes";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case TYPE.SET:
      return action.payload;

    case TYPE.ADD:
      return [...state, action.payload];

    case TYPE.EDIT:
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );

    case TYPE.DELETE:
      return state.filter((product) => product.id !== action.payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case TYPE.FILTER:
      return action.payload;

    default:
      return state;
  }
};

const productsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default productsReducer;
