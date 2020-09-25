import {
  RESET_ITEM_DIALOGE,
  ACTIV_NEW_ITEM_DIALOGE,
  RESET_CL_FORM,
  CHANGE_ITEM_VALUES,
  ADD_NEW_ITEM,
  EDIT_ITEM,
} from "../actions/types";
export default (state = null, action) => {
  switch (action.type) {
    case ACTIV_NEW_ITEM_DIALOGE:
      return { edit: false };
    case EDIT_ITEM:
      return { edit: true, index: action.payload };
    case RESET_ITEM_DIALOGE:
    case RESET_CL_FORM:
      return null;
    case CHANGE_ITEM_VALUES:
      if (action.extra)
        if (
          action.extra.source === ADD_NEW_ITEM ||
          action.extra.source === EDIT_ITEM
        )
          return null;
      return state;
    default:
      return state;
  }
};
