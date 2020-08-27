import React from "react";
import { connect } from "react-redux";
import CreateLogForm from "./CreateLogForm";
import ErrorMessages from "./ErrorMessages";
import Navbar from "./Navbar";
import "./CreateLogForm.css";
import { showError, setError, resetError } from "../../actions";

class CreateLog extends React.Component {
  state = {
    showErrorMessage: false,
  };
  setEH = (T, obj, errorTaps) => {
    if (T) {
      this.props.setError(Object.values(obj), errorTaps);
    } else {
      this.props.resetError();
    }
  };
  onSubmitPress = (fv) => {
    if (!this.props.error.exist) {
      console.log("formValues : ", fv);
      this.props.resetError();
      this.props.history.push("/");
    }
    this.setState({ showErrorMessage: true });
    this.props.showError();
  };
  render() {
    return (
      <div className="ui container">
        <Navbar
          onSubmitPress={this.onSubmitPress}
          onHomePress={this.props.resetError}
        />
        <ErrorMessages
          condition={this.state.showErrorMessage && this.props.error.show}
          onCloseClick={() => this.setState({ showErrorMessage: false })}
          label="Apply these fixes first"
          messages={this.props.error.list}
        />
        <CreateLogForm
          setEH={this.setEH}
          errorTaps={this.props.error.show ? this.props.error.taps : []}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ error }) => {
  return { error };
};

export default connect(mapStateToProps, { showError, setError, resetError })(
  CreateLog
);
