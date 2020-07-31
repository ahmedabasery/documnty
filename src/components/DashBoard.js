import React from "react";
import { Link } from "react-router-dom";

class DashBoard extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Link to="/createlog">
          <div className="ui header">DashBoard</div>
          <div className="ui animated button" tabIndex="0">
            <div className="visible content">Create log</div>
            <div className="hidden content">
              <i className="plus icon"></i>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default DashBoard;
