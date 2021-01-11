import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger'
import reducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleWare = (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined') ? [thunk, logger] : [thunk];

export const store = createStore(
    reducer, composeEnhancer(applyMiddleware(...middleWare)));
