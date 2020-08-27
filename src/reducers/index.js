import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ErorrReducer from "./ErrorReducer";
import NewItemDialogeReducer from "./NewItemDialogeReducer";

export default combineReducers({
  form: formReducer,
  error: ErorrReducer,
  newItemDialoge: NewItemDialogeReducer,
});
