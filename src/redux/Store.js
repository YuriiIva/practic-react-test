// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import productsReducer from "./products/productsReducer";

const logger = createLogger({
  timestamp: false,
  collapsed: (getState, action, logEntry) => !logEntry.error,
});

const store = configureStore({
  reducer: { products: productsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

/////////// без библиотеки toolkit//////////

// const rootReducer = combineReducers({
//   products: productsReducer,
// });

// const store = createStore(rootReducer, devToolsEnhancer());

export default store;
