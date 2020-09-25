import {
  ACTIV_NEW_ITEM_DIALOGE,
  RESET_ITEM_DIALOGE,
  RESET_CL_ERROR_MESSAGES,
  RESET_CL_FORM,
  CHANGE_ITEM_VALUES,
  EDIT_ITEM,
} from "./types";

export const activeNewItemDialoge = () => {
  return { type: ACTIV_NEW_ITEM_DIALOGE };
};
export const resetItemDialoge = () => {
  return { type: RESET_ITEM_DIALOGE };
};

export const resetCLErrorMessages = () => {
  return { type: RESET_CL_ERROR_MESSAGES };
};
export const resetCLForm = () => {
  return { type: RESET_CL_FORM };
};

export const editItem = (index) => ({
  type: EDIT_ITEM,
  payload: index,
});

export const changeItemsValue = (newValue, source) => ({
  type: CHANGE_ITEM_VALUES,
  meta: {
    form: "createLogForm",
    field: "newItemsList",
    touch: false,
    persistentSubmitErrors: false,
  },
  payload: newValue === "[]" ? "" : newValue,
  extra: {
    source,
  },
});
