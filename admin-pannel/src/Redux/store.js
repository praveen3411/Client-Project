import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";
import { AuthReducers } from "./UserAuth/Auth.reducer";

let rootReducers = combineReducers({
  auth: AuthReducers,
});

let createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
export const store = legacy_createStore(
  rootReducers,
  createCompose(applyMiddleware(thunk))
);
