import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { resetError, showError } from "../../actions";

const Navbar = ({
  resetError,
  showError,
  showErrorMessage,
  clForm,
  historyPush,
}) => {
  const onSubmitPress = () => {
    if (!clForm.syncErrors) {
      resetError();
      historyPush("/");
    }
    showErrorMessage();
    showError();
  };
  return (
    <div className="ui inverted menu">
      <div className="item">
        <Link to="/">
          <div
            className="ui vertical animated button"
            tabIndex="0"
            onClick={resetError}
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

const mapStateToProps = ({ form }) => {
  return { clForm: form.createLogForm };
};

export default connect(mapStateToProps, { resetError, showError })(Navbar);
