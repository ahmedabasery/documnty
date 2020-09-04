import React from "react";
import { reduxForm } from "redux-form";
import NewItemFormStr from "./NewItemFormStr";

const NewItemForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} id="newItemForm">
      <NewItemFormStr />
    </form>
  );
};

const validate = (formValues) => {
  return {};
};
export default reduxForm({
  form: "newItemForm",
  onSubmit: () => console.log("Haaaaah"),
  validate,
})(NewItemForm);
