import React from "react";
import { reduxForm } from "redux-form";
import CreateLogFormStr from "./CreateLogFormStr";
import PC from "./PagesConfiguration";

const CreateLogForm = ({ handleSubmit, onFormSubmit }) => {
  return (
    <form onSubmit={handleSubmit((fV) => onFormSubmit(fV))} id="createLogForm">
      <CreateLogFormStr />
    </form>
  );
};

const validate = (formValues) => {
  const error = {};
  PC.forEach((field) => {
    const errorMessage = field.checkError({
      value: formValues[field.name],
      formValues,
    });
    if (errorMessage) error[field.name] = errorMessage;
  });
  return error;
};

export default reduxForm({
  form: "createLogForm",
  validate: validate,
})(CreateLogForm);
