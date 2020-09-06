import React from "react";
import Modal from "../../../Modal";
import PopUpMessage from "../../../PopUpMessage";
import NewItemForm from "./NewItemForm";
import { sendNewItem } from "../../../../actions";
import { connect } from "react-redux";

const NewItemModal = ({ resetNewItemDialoge, sendNewItem }) => {
  const onFormSubmit = (formValues) => {
    sendNewItem(formValues);
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

export default connect(null, { sendNewItem })(NewItemModal);
