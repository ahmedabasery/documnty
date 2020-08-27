import { RESER_ERROR, SHOW_ERROR } from "../actions/types";
const INIT_STATE = {
  show: false,
};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESER_ERROR:
      return INIT_STATE;
    case SHOW_ERROR:
      return {
        show: true,
      };
    default:
      return state;
  }
};
