import { RESER_ERROR, SET_ERROR, SHOW_ERROR } from "./types";

export const resetError = () => {
  return { type: RESER_ERROR };
};
export const setError = (ErrorList) => {
  return { type: SET_ERROR, payload: ErrorList };
};
export const showError = () => {
  return { type: SHOW_ERROR };
};
