import { RESET_NEW_ITEM, SEND_NEW_ITEM } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case SEND_NEW_ITEM:
      return action.payload;
    case RESET_NEW_ITEM:
      return null;
    default:
      return state;
  }
};
