import {
  RESET_NEW_ITEM_DIALOGE,
  ACTIV_NEW_ITEM_DIALOGE,
  RESET_CL_FORM,
  SEND_NEW_ITEM,
} from "../actions/types";
export default (state = false, action) => {
  switch (action.type) {
    case ACTIV_NEW_ITEM_DIALOGE:
      return true;
    case RESET_NEW_ITEM_DIALOGE:
    case RESET_CL_FORM:
    case SEND_NEW_ITEM:
      return false;
    default:
      return state;
  }
};
