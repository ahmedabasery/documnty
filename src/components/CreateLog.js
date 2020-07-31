import React from "react";
import { Link } from "react-router-dom";

class CreateLog extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Link to="/">
          <div className="ui vertical animated button" tabIndex="0">
            <div className="hidden content">Back</div>
            <div className="visible content">
              <i className="angle left icon"></i>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CreateLog;
