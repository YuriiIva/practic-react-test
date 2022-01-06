// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import productsReducer from "./products/productsReducer";

const logger = createLogger({
  timestamp: false,
  collapsed: (getState, action, logEntry) => !logEntry.error,
});

const productsConfig = {
  key: "filter",
  storage,
  whitelist: " filter",
};

const store = configureStore({
  reducer: {
    products: persistReducer(productsConfig, productsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);
/////////// без библиотеки toolkit//////////

// const rootReducer = combineReducers({
//   products: productsReducer,
// });

// const store = createStore(rootReducer, devToolsEnhancer());

export { store, persistor };
