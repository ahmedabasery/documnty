import { RESET_CL_ERROR_MESSAGES, RESET_CL_FORM } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case "@@redux-form/SET_SUBMIT_FAILED":
      if (action.meta.form === "createLogForm") return true;
      else return state;
    case "@@redux-form/UPDATE_SYNC_ERRORS":
      if (
        action.meta.form === "createLogForm" &&
        Object.keys(action.payload.syncErrors).length === 0
      )
        return false;
      else return state;
    case RESET_CL_ERROR_MESSAGES:
    case RESET_CL_FORM:
      return false;
    default:
      return state;
  }
};
