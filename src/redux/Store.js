import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
