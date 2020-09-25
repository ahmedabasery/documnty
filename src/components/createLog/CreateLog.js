import React from "react";
import { connect } from "react-redux";
import CreateLogForm from "./CreateLogForm";
import ErrorMessages from "./ErrorMessages";
import Navbar from "./Navbar";
import "./CreateLogForm.css";
import { resetCLErrorMessages, resetItemDialoge } from "../../actions";
import NewItemModal from "./pages/components/NewItemModal";

const CreateLog = ({
  clForm,
  clErrorMessages,
  newItemDialoge,
  resetCLErrorMessages,
  resetItemDialoge,
  history,
}) => {
  const onFormSubmit = (fv) => {
    console.log("form values are", fv);
    resetItemDialoge();
    history.push("/");
  };

  return (
    <div className="ui container">
      <Navbar />
      <ErrorMessages
        condition={clErrorMessages}
        onCloseClick={() => resetCLErrorMessages()}
        label="Apply these fixes first"
        messages={Object.values(
          clForm ? (clForm.syncErrors ? clForm.syncErrors : {}) : {}
        )}
      />
      <CreateLogForm onFormSubmit={onFormSubmit} />
      {newItemDialoge && <NewItemModal />}
    </div>
  );
};
const mapStateToProps = ({ form, clErrorMessages, newItemDialoge }) => {
  return {
    clForm: form.createLogForm ? form.createLogForm : {},
    clErrorMessages,
    newItemDialoge,
  };
};

export default connect(mapStateToProps, {
  resetCLErrorMessages,
  resetItemDialoge,
})(CreateLog);
