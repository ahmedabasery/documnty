import {
  RESET_NEW_ITEM_DIALOGE,
  ACTIV_NEW_ITEM_DIALOGE,
} from "../actions/types";
export default (state = false, action) => {
  switch (action.type) {
    case ACTIV_NEW_ITEM_DIALOGE:
      return true;
    case RESET_NEW_ITEM_DIALOGE:
      return false;
    default:
      return state;
  }
};
