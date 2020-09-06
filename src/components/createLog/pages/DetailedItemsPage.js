import React from "react";
import { Field } from "redux-form";
import NewItemsTable from "./components/NewItemsTable";

const DeatiledItem = () => {
  return <Field name="newItemsList" component={NewItemsTable} />;
};
export default DeatiledItem;
