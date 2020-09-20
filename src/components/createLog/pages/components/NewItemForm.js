import React from "react";
import { reduxForm } from "redux-form";
import NewItemFormStr from "./NewItemFormStr";

const NewItemForm = ({ handleSubmit, onFormSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onFormSubmit)} id="newItemForm">
      <NewItemFormStr />
    </form>
  );
};

const validate = (formValues) => {
  const Error = {};
  if (!formValues.name) Error.name = "name is required";
  return Error;
};
export default reduxForm({
  form: "newItemForm",
  validate,
})(NewItemForm);
