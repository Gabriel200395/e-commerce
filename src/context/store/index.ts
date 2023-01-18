import { cart, products } from "../reducers";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({ cart, products });
const store = configureStore({ reducer: reducers });

export default store;
