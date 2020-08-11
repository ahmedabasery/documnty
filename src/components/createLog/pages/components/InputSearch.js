import React from "react";

class InputSearch extends React.Component {
  className = `ui icon input ${
    this.props.meta.error && this.props.meta.touched ? "error" : ""
  }`;
  render() {
    return (
      <div className="field">
        <label className="mylabel">{this.props.label}</label>
        <div className={this.className}>
          <input
            {...this.props.input}
            type="text"
            placeholder="Search..."
            autoComplete="off"
          />
          <i className="inverted circular search link icon"></i>
        </div>
      </div>
    );
  }
}

export default InputSearch;
