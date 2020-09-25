import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ItemDialogeReducer from "./ItemDialogeReducer";
import CreateLogErrorMessageReducer from "./CreateLogErrorMessageReducer";

export default combineReducers({
  form: formReducer,
  clErrorMessages: CreateLogErrorMessageReducer,
  newItemDialoge: ItemDialogeReducer,
});
