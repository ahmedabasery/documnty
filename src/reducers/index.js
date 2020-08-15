import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ErorrReducer from "./ErrorReducer";

export default combineReducers({
  form: formReducer,
  error: ErorrReducer,
});
