import React from "react";
import { connect } from "react-redux";
import { resetNewItem, activeNewItemDialoge } from "../../../../actions";

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
  componentDidUpdate() {
    if (this.props.newItem) {
      this.props.onNewItemArrive(this.props.newItem);
      this.props.resetNewItem();
    }
  }
}

const mapStateToProps = ({ newItem }) => {
  return { newItem };
};

export default connect(mapStateToProps, { resetNewItem, activeNewItemDialoge })(
  NewItemButton
);
