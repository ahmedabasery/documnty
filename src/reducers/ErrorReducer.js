import { RESER_ERROR, SET_ERROR, SHOW_ERROR } from "../actions/types";
const INIT_STATE = {
  show: false,
  exist: false,
  list: [],
};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESER_ERROR:
      return INIT_STATE;
    case SHOW_ERROR:
      return { show: state.exist, exist: state.exist, list: state.list };
    case SET_ERROR:
      return { show: state.show, exist: true, list: action.payload };
    default:
      return state;
  }
};
