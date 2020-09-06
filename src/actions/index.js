import {
  ACTIV_NEW_ITEM_DIALOGE,
  RESET_NEW_ITEM_DIALOGE,
  RESET_CL_ERROR_MESSAGES,
  RESET_CL_FORM,
  SEND_NEW_ITEM,
  RESET_NEW_ITEM,
} from "./types";

export const activeNewItemDialoge = () => {
  return { type: ACTIV_NEW_ITEM_DIALOGE };
};
export const resetNewItemDialoge = () => {
  return { type: RESET_NEW_ITEM_DIALOGE };
};

export const resetCLErrorMessages = () => {
  return { type: RESET_CL_ERROR_MESSAGES };
};
export const resetCLForm = () => {
  return { type: RESET_CL_FORM };
};

export const sendNewItem = (newItem) => {
  return { type: SEND_NEW_ITEM, payload: newItem };
};

export const resetNewItem = () => {
  return { type: RESET_NEW_ITEM };
};
