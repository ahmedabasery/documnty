import React from "react";
import { Link } from "react-router-dom";
import CreateLogForm from "./CreateLogForm";
import "./CreateLogForm.css";

class CreateLog extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div style={{ marginBottom: "30px" }}>
          <Link to="/">
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">Back</div>
              <div className="visible content">
                <i className="angle left icon"></i>
              </div>
            </div>
          </Link>
        </div>
        <CreateLogForm />
      </div>
    );
  }
}

export default CreateLog;
