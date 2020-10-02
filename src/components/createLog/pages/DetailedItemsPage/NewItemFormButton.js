import React from "react";
import { connect } from "react-redux";

const newItemFormButton = ({ niFormError, edit }) => {
  const className = `ui button primary${
    niFormError ? " negative disabled" : ""
  }`;
  return (
    <button className={className} form="newItemForm" type="submit">
      {edit ? "Edit" : "Add"}
    </button>
  );
};

const mapStateToProps = ({ form, newItemDialoge }) => {
  const niForm = form.newItemForm;
  const submitFailed = niForm.submitFailed ? true : false;
  const syncErrors = niForm.syncErrors ? true : false;
  return {
    niFormError: submitFailed && syncErrors,
    edit: newItemDialoge ? newItemDialoge.edit : false,
  };
};

export default connect(mapStateToProps)(newItemFormButton);
