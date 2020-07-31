import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const reducer = () => {
  return 5;
};

export default combineReducers({
  form: formReducer,
  number: reducer,
});
