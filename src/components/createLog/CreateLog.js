import React from "react";
import CreateLogForm from "./CreateLogForm";
import ErrorMessages from "./ErrorMessages";
import Navbar from "./Navbar";
import "./CreateLogForm.css";

class CreateLog extends React.Component {
  state = {
    errorSubmission: false,
    errorHappen: true,
  };
  setEH = (T, obj) => {
    if (this._Mounted) {
      this.errorObject = obj;
      this.setState({ errorHappen: T });
      if (!T) this.setState({ errorSubmission: false });
    }
  };
  errorObject = { def: "fill all manditory fields" };
  _Mounted = false;
  componentDidMount() {
    this._Mounted = true;
  }
  componentWillUnmount() {
    this._Mounted = false;
  }

  onSubmitPress = () => {
    console.log("on Sunmission state : ", this.state);
    if (this.state.errorHappen) {
      if (!this.state.errorSubmission) {
        this.setState({ errorSubmission: true });
      }
    } else {
      this.setState({ errorSubmission: false });
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="ui container">
        <Navbar onSubmitPress={this.onSubmitPress} />
        <ErrorMessages
          condition={this.state.errorSubmission && this.errorObject}
          onCloseClick={() => this.setState({ errorSubmission: false })}
          label="Apply these fixes first"
          messages={Object.values(this.errorObject)}
        />
        <CreateLogForm setEH={this.setEH} />
      </div>
    );
  }
}

export default CreateLog;
