import React from "react";
import Modal from "../../../Modal";
import PopUpMessage from "../../../PopUpMessage";
import NewItemForm from "./NewItemForm";

const NewItemModal = ({ resetNewItemDialoge }) => {
  return (
    <Modal onDismiss={() => resetNewItemDialoge()}>
      <PopUpMessage
        title="New Item "
        content={<NewItemForm />}
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

export default NewItemModal;
