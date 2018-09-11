import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

import { createLogger } from "redux-logger";

const LoggerMiddleware = createLogger();

export const store = createStore(reducers, {}, applyMiddleware(thunk, LoggerMiddleware));
