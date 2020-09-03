import React from "react";
import { connect } from "react-redux";
import CreateLogForm from "./CreateLogForm";
import ErrorMessages from "./ErrorMessages";
import Navbar from "./Navbar";
import "./CreateLogForm.css";
import { resetCLErrorMessages } from "../../actions";

class CreateLog extends React.Component {
  onSubmit = (fv) => {
    console.log("form values are", fv);
    this.props.resetCLErrorMessages();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui container">
        <Navbar />
        <ErrorMessages
          condition={this.props.clErrorMessages}
          onCloseClick={() => this.props.resetCLErrorMessages()}
          label="Apply these fixes first"
          messages={Object.values(
            this.props.clForm
              ? this.props.clForm.syncErrors
                ? this.props.clForm.syncErrors
                : {}
              : {}
          )}
        />
        <CreateLogForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
const mapStateToProps = ({ form, clErrorMessages }) => {
  return {
    clForm: form.createLogForm ? form.createLogForm : {},
    clErrorMessages,
  };
};

export default connect(mapStateToProps, { resetCLErrorMessages })(CreateLog);
