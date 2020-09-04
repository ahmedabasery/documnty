import React from "react";
import { connect } from "react-redux";
import { activeNewItemDialoge } from "../../../actions";
import ItemsRows from "./components/ItemsRows";

const DUMMY_ITEM = {
  name: "Pencils",
  q: "50",
  ref: "Library tools",
  desc: "used for writing",
  status: "new",
  for: "requested",
};

const DeatiledItem = ({ activeNewItemDialoge }) => {
  const [items, setItems] = React.useState([DUMMY_ITEM]);
  const itemProperties = ["name", "q", "ref", "desc", "status", "for"];

  return (
    <table className="ui compact celled definition table">
      <thead>
        <tr>
          <th id="itemsId"></th>
          <th>Item</th>
          <th id="itemsQ">Qty</th>
          <th>Reference</th>
          <th>Description</th>
          <th>status</th>
          <th>for</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <ItemsRows itemProperties={itemProperties} items={items} />
      </tbody>
      <tfoot className="full-width">
        <tr>
          <th></th>
          <th colSpan="7">
            <div
              className="ui right floated small primary labeled icon button"
              onClick={activeNewItemDialoge}
            >
              <i className="plus icon"></i> Add Item
            </div>
          </th>
        </tr>
      </tfoot>
    </table>
  );
};
export default connect(null, {
  activeNewItemDialoge,
})(DeatiledItem);
