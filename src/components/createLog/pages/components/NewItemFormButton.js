import React from "react";
import { connect } from "react-redux";

const newItemFormButton = ({ niFormError }) => {
  const className = `ui button primary${
    niFormError ? " negative disabled" : ""
  }`;
  return (
    <button className={className} form="newItemForm" type="submit">
      Add
    </button>
  );
};

const mapStateToProps = ({ form }) => {
  const niForm = form.newItemForm;
  const submitFailed = niForm.submitFailed ? true : false;
  const syncErrors = niForm.syncErrors ? true : false;
  return {
    niFormError: submitFailed && syncErrors,
  };
};

export default connect(mapStateToProps)(newItemFormButton);
