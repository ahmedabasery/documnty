import React from "react";
import { itemProperities } from "../../itemsProperitiesConfiguration";
import NewItemButton from "./NewItemButton";
import ItemsRows from "./ItemsRows";

class NewItemsTable extends React.Component {
  state = { items: [] };
  static getDerivedStateFromProps({ input }) {
    return { items: input.value ? JSON.parse(input.value) : [] };
  }
  render() {
    return (
      <table
        className="ui compact celled definition table"
        onBlur={this.props.input.onBlur}
        onFocus={this.props.input.onFocus}
        onDragStart={this.props.input.onDragStart}
        onDrop={this.props.input.onDrop}
      >
        <thead>
          <tr>
            <th id="itemsId"></th>
            <th>Item</th>
            <th id="itemsQ">Qty</th>
            <th>Reference</th>
            <th>Description</th>
            <th>status</th>
            <th>for</th>
            <th id="itemActions" />
          </tr>
        </thead>
        <tbody>
          <ItemsRows
            itemProperties={itemProperities}
            items={this.state.items}
          />
        </tbody>
        <tfoot className="full-width">
          <tr>
            <th></th>
            <th colSpan="7">
              <NewItemButton />
            </th>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default NewItemsTable;
