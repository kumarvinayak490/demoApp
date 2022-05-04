import {  configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import userReducer from './slices/user-slice'

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  import sessionStorage from "redux-persist/es/storage/session";

  const persistConfig = {
    timeout: 100,
    key: 'root',
    version: 1,
    storage:sessionStorage,
  }

  const rootReducer = combineReducers({user:userReducer})
const persistedReducer = persistReducer(persistConfig, rootReducer )

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

