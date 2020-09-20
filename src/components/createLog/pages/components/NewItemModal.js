import React from "react";
import Modal from "../../../Modal";
import PopUpMessage from "../../../PopUpMessage";
import NewItemForm from "./NewItemForm";
import NewItemFormButton from "./NewItemFormButton";
import { reduxChange } from "../../../../actions";
import { connect } from "react-redux";

const NewItemModal = ({ resetNewItemDialoge, reduxChange, clFormValues }) => {
  const onFormSubmit = (formValues) => {
    reduxChange(formValues, clFormValues);
  };
  return (
    <Modal onDismiss={() => resetNewItemDialoge()}>
      <PopUpMessage
        title="New Item "
        content={<NewItemForm onFormSubmit={onFormSubmit} />}
        actions={<NewItemFormButton />}
      />
    </Modal>
  );
};

const mapStateToProps = ({ form }) => {
  return { clFormValues: form.createLogForm.values };
};

export default connect(mapStateToProps, { reduxChange })(NewItemModal);
