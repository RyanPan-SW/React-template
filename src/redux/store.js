import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import counter from "reducers/counter";
import UserInfo from "reducers/userInfo";

let store = createStore(
  combineReducers({ counter, UserInfo }),
  applyMiddleware(thunkMiddleware)
);

export default store;
