import {
  ACTIV_NEW_ITEM_DIALOGE,
  RESET_NEW_ITEM_DIALOGE,
  RESET_CL_ERROR_MESSAGES,
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
