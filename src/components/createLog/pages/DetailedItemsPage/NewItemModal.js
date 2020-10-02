import React from "react";
import { connect } from "react-redux";
import { changeItemsValue, resetItemDialoge } from "../../../../actions";
import { ADD_NEW_ITEM, EDIT_ITEM } from "../../../../actions/types";
import Modal from "../../../Modal";
import PopUpMessage from "../../../PopUpMessage";
import NewItemForm from "./NewItemForm";
import NewItemFormButton from "./NewItemFormButton";

const NewItemModal = ({
  resetItemDialoge,
  changeItemsValue,
  clFormValues,
  newItemDialoge,
}) => {
  const onFormSubmit = (formValues) => {
    const currentNewItems = clFormValues
      ? clFormValues.newItemsList
        ? JSON.parse(clFormValues.newItemsList)
        : []
      : [];
    if (newItemDialoge.edit) {
      currentNewItems[newItemDialoge.index] = formValues;
      const editedItemsValue = JSON.stringify(currentNewItems);
      changeItemsValue(editedItemsValue, EDIT_ITEM);
    } else {
      const newItemsValue = JSON.stringify([...currentNewItems, formValues]);
      changeItemsValue(newItemsValue, ADD_NEW_ITEM);
    }
  };
  const initialValues = newItemDialoge.edit
    ? JSON.parse(clFormValues.newItemsList)[newItemDialoge.index]
    : undefined;
  return (
    <Modal onDismiss={() => resetItemDialoge()}>
      <PopUpMessage
        title={newItemDialoge.edit ? "Edit Item" : "New Item "}
        content={
          <NewItemForm
            onFormSubmit={onFormSubmit}
            initialValues={initialValues}
          />
        }
        actions={<NewItemFormButton />}
      />
    </Modal>
  );
};

const mapStateToProps = ({ form, newItemDialoge }) => {
  return {
    clFormValues: form.createLogForm.values,
    newItemDialoge,
  };
};

export default connect(mapStateToProps, { changeItemsValue, resetItemDialoge })(
  NewItemModal
);
