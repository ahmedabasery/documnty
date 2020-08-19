import { RESER_ERROR, SET_ERROR, SHOW_ERROR } from "./types";

export const resetError = () => {
  return { type: RESER_ERROR };
};
export const setError = (errorList, errorTaps) => {
  return { type: SET_ERROR, payload: { errorList, errorTaps } };
};
export const showError = () => {
  return { type: SHOW_ERROR };
};
