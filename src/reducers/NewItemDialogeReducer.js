import {
  RESET_NEW_ITEM_DIALOGE,
  ACTIV_NEW_ITEM_DIALOGE,
  RESET_CL_FORM,
  CHANGE_ITEM_VALUES,
  ADD_NEW_ITEM,
} from "../actions/types";
export default (state = false, action) => {
  switch (action.type) {
    case ACTIV_NEW_ITEM_DIALOGE:
      return true;
    case RESET_NEW_ITEM_DIALOGE:
    case RESET_CL_FORM:
      return false;
    case CHANGE_ITEM_VALUES:
      if (action.extra) if (action.extra.source === ADD_NEW_ITEM) return false;
      return state;
    default:
      return state;
  }
};
