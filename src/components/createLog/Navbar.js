import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { resetCLForm } from "../../actions";

const Navbar = ({ resetCLForm }) => {
  return (
    <div className="ui inverted menu">
      <div className="item">
        <Link to="/">
          <div
            className="ui vertical animated button"
            tabIndex="0"
            onClick={resetCLForm}
          >
            <div className="hidden content">Back</div>
            <div className="visible content">
              <i className="angle left icon"></i>
            </div>
          </div>
        </Link>
      </div>
      <div className="right menu">
        <div className="item my-pointer" id="hovered">
          Logo
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ form }) => {
  return { clForm: form.createLogForm };
};

export default connect(mapStateToProps, { resetCLForm })(Navbar);
