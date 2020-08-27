import React from "react";
import { connect } from "react-redux";
import CreateLogForm from "./CreateLogForm";
import ErrorMessages from "./ErrorMessages";
import Navbar from "./Navbar";
import "./CreateLogForm.css";
import { showError, resetError } from "../../actions";

class CreateLog extends React.Component {
  state = {
    showErrorMessage: false,
  };

  onSubmitPress = () => {
    if (!this.props.clForm.syncErrors) {
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
          messages={Object.values(
            this.props.clForm
              ? this.props.clForm.syncErrors
                ? this.props.clForm.syncErrors
                : {}
              : {}
          )}
        />
        <CreateLogForm />
      </div>
    );
  }
}
const mapStateToProps = ({ error, form }) => {
  return { error, clForm: form.createLogForm };
};

export default connect(mapStateToProps, { showError, resetError })(CreateLog);
