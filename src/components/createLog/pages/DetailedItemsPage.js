import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { activeNewItemDialoge } from "../../../actions";
import NewItemsTable from "./components/NewItemsTable";

const DUMMY_ITEM = {
  name: "Pencils",
  q: "50",
  ref: "Library tools",
  desc: "used for writing",
  status: "new",
  for: "requested",
};

const DeatiledItem = ({ activeNewItemDialoge }) => {
  return (
    <Field
      name="newItemsList"
      component={NewItemsTable}
      activeNewItemDialoge={activeNewItemDialoge}
    />
  );
};
export default connect(null, {
  activeNewItemDialoge,
})(DeatiledItem);
