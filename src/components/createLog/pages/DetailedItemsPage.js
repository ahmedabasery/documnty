import React from "react";
import { connect } from "react-redux";
import { activeNewItemDialoge, resetNewItemDialoge } from "../../../actions";
import ItemsRows from "./components/ItemsRows";
import NewItemForm from "./components/NewItemForm";

const DUMMY_ITEM = {
  name: "Pencils",
  q: "50",
  ref: "Library tools",
  desc: "used for writing",
  status: "new",
  for: "requested",
};

class DeatiledItem extends React.Component {
  state = { items: [DUMMY_ITEM] };
  itemProperties = ["name", "q", "ref", "desc", "status", "for"];
  renderNewItemDialoge = () =>
    this.props.newItemDialoge ? (
      <NewItemForm resetNewItemDialoge={resetNewItemDialoge} />
    ) : null;
  render() {
    console.log("rerendered with state : ", this.state);
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
          <ItemsRows
            itemProperties={this.itemProperties}
            items={this.state.items}
          />
        </tbody>
        <tfoot className="full-width">
          <tr>
            <th></th>
            <th colSpan="7">
              <div
                className="ui right floated small primary labeled icon button"
                onClick={() => this.props.activeNewItemDialoge()}
              >
                <i className="plus icon"></i> Add Item
              </div>
              <div className="ui small button">Approve</div>
              <div className="ui small  disabled button">Approve All</div>
              <this.renderNewItemDialoge />
            </th>
          </tr>
        </tfoot>
      </table>
    );
  }
}
const mapStateToProps = ({ newItemDialoge }) => {
  return { newItemDialoge };
};
export default connect(mapStateToProps, {
  resetNewItemDialoge,
  activeNewItemDialoge,
})(DeatiledItem);
