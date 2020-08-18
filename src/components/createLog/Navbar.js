import React from "react";
import { Link } from "react-router-dom";

export default ({
  onSubmitPress = () => console.log("Error : there is no action assigned here"),
  onHomePress = () => console.log("Error : there is no action assigned here"),
}) => {
  return (
    <div className="ui inverted menu">
      <div className="item">
        <Link to="/">
          <div
            className="ui vertical animated button"
            tabIndex="0"
            onClick={onHomePress}
          >
            <div className="hidden content">Back</div>
            <div className="visible content">
              <i className="angle left icon"></i>
            </div>
          </div>
        </Link>
      </div>
      <div className="right menu">
        <div className="item my-pointer" onClick={onSubmitPress} id="hovered">
          Submit
        </div>
      </div>
    </div>
  );
};
