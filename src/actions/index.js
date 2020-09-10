import {
  ACTIV_NEW_ITEM_DIALOGE,
  RESET_NEW_ITEM_DIALOGE,
  RESET_CL_ERROR_MESSAGES,
  RESET_CL_FORM,
  REDUX_CHANGE,
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

export const reduxChange = (newItem, clFormValues) => {
  console.log({ newItem, clFormValues });
  const currentNewItems = clFormValues
    ? clFormValues.newItemsList
      ? JSON.parse(clFormValues.newItemsList)
      : []
    : [];
  return {
    type: REDUX_CHANGE,
    meta: {
      form: "createLogForm",
      field: "newItemsList",
      touch: false,
      persistentSubmitErrors: false,
    },
    payload: JSON.stringify([...currentNewItems, newItem]),
  };
};
