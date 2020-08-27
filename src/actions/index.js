import {
  RESER_ERROR,
  SHOW_ERROR,
  ACTIV_NEW_ITEM_DIALOGE,
  RESET_NEW_ITEM_DIALOGE,
} from "./types";

export const resetError = () => {
  return { type: RESER_ERROR };
};

export const showError = () => {
  return { type: SHOW_ERROR };
};
export const activeNewItemDialoge = () => {
  return { type: ACTIV_NEW_ITEM_DIALOGE };
};
export const resetNewItemDialoge = () => {
  return { type: RESET_NEW_ITEM_DIALOGE };
};
