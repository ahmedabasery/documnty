import React from "react";
import Modal from "../../../Modal";
import PopUpMessage from "../../../PopUpMessage";
import NewItemForm from "./NewItemForm";
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
        actions={
          <button
            className="ui button primary"
            form="newItemForm"
            type="submit"
          >
            Add
          </button>
        }
      />
    </Modal>
  );
};

const mapStateToProps = ({ form }) => {
  return { clFormValues: form.createLogForm.values };
};

export default connect(mapStateToProps, { reduxChange })(NewItemModal);
