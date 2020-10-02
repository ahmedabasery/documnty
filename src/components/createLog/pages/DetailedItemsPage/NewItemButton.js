import React from "react";
import { connect } from "react-redux";
import { activeNewItemDialoge } from "../../../../actions";

class NewItemButton extends React.Component {
  render() {
    return (
      <div
        className="ui right floated small primary labeled icon button"
        onClick={this.props.activeNewItemDialoge}
      >
        <i className="plus icon"></i> Add Item
      </div>
    );
  }
}

export default connect(null, { activeNewItemDialoge })(NewItemButton);
