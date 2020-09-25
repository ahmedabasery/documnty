import React from "react";
import Modal from "../../../Modal";
import PopUpMessage from "../../../PopUpMessage";
import NewItemForm from "./NewItemForm";
import NewItemFormButton from "./NewItemFormButton";
import { changeItemsValue } from "../../../../actions";
import { connect } from "react-redux";
import { ADD_NEW_ITEM } from "../../../../actions/types";

const NewItemModal = ({
  resetNewItemDialoge,
  changeItemsValue,
  clFormValues,
}) => {
  const onFormSubmit = (formValues) => {
    const currentNewItems = clFormValues
      ? clFormValues.newItemsList
        ? JSON.parse(clFormValues.newItemsList)
        : []
      : [];
    const newItemsValue = JSON.stringify([...currentNewItems, formValues]);
    changeItemsValue(newItemsValue, ADD_NEW_ITEM);
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

export default connect(mapStateToProps, { changeItemsValue })(NewItemModal);
