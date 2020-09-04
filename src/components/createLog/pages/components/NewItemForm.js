import React from "react";
import { reduxForm } from "redux-form";
import NewItemFormStr from "./NewItemFormStr";

const NewItemForm = ({ handleSubmit, resetNewItemDialoge }) => {
  const onSubmit = (fv) => {
    console.log("new submitted item is ", fv);
    resetNewItemDialoge();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="newItemForm">
      <NewItemFormStr />
    </form>
  );
};

const validate = (formValues) => {
  return {};
};
export default reduxForm({
  form: "newItemForm",
  validate,
})(NewItemForm);
