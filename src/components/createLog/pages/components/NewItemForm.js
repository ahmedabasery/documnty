import React from "react";
import { reduxForm } from "redux-form";
import NewItemFormStr from "./NewItemFormStr";
import Modal from "../../../Modal";
import PopUpMessage from "../../../PopUpMessage";

const NewItemForm = ({
  handleSubmit,
  resetNewItemDialoge,
  onSubmit = () => console.log("no action for submit"),
}) => {
  const formObj = { onSubmit: handleSubmit((hv) => onSubmit(hv)) };
  return (
    <Modal {...formObj} includeForm onDismiss={() => resetNewItemDialoge()}>
      <PopUpMessage
        title="New Item "
        content={<NewItemFormStr />}
        actions={<button className="ui button primary">Add</button>}
      />
    </Modal>
  );
};

const validate = (formValues) => {
  return {};
};
export default reduxForm({ validate, form: "newItemForm" })(NewItemForm);
