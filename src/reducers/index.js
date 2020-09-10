import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import NewItemDialogeReducer from "./NewItemDialogeReducer";
import CreateLogErrorMessageReducer from "./CreateLogErrorMessageReducer";

export default combineReducers({
  form: formReducer,
  clErrorMessages: CreateLogErrorMessageReducer,
  newItemDialoge: NewItemDialogeReducer,
});
