import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import productsReducer from "./products/productsReducer";

const store = createStore(productsReducer, devToolsEnhancer());

export default store;
