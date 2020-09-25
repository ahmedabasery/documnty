import React from "react";
import { connect } from "react-redux";
import Modal from "../../../Modal";
import PopUpMessage from "../../../PopUpMessage";
import { changeItemsValue } from "../../../../actions";
import { DELETE_ITEM } from "../../../../actions/types";

const ItemActions = ({ index, itemsArray, changeItemsValue }) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const onDeleteClick = () => {
    if (index >= itemsArray.length)
      console.error("Error in deleting the item : ", { index, itemsArray });
    else {
      const newItemsArray = itemsArray.filter((item, i) => i !== index);
      const newItemsValue = JSON.stringify(newItemsArray);
      changeItemsValue(newItemsValue, DELETE_ITEM);
    }
    setShowDeleteModal(false);
  };
  const DeleteModal = () =>
    showDeleteModal ? (
      <Modal onDismiss={() => setShowDeleteModal(false)}>
        <PopUpMessage
          title="Warning"
          content="Are you sure want to delete this item ? "
          actions={
            <div className="ui negative button" onClick={onDeleteClick}>
              Delete
            </div>
          }
        />
      </Modal>
    ) : null;
  return (
    <>
      <div className="ui mini icon buttons ">
        <div className="ui green button">
          <i className="edit icon" />
        </div>
        <div className="ui red button" onClick={() => setShowDeleteModal(true)}>
          <i className="trash icon" />
        </div>
      </div>
      <DeleteModal />
    </>
  );
};

const mapStateToProps = ({ form }) => {
  return {
    itemsArray: form.createLogForm
      ? form.createLogForm.values
        ? form.createLogForm.values.newItemsList
          ? JSON.parse(form.createLogForm.values.newItemsList)
          : []
        : []
      : [],
  };
};
export default connect(mapStateToProps, { changeItemsValue })(ItemActions);
