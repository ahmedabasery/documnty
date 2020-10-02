import React from "react";
import { connect } from "react-redux";
import "./CreateLogForm.css";
import { resetCLErrorMessages, resetItemDialoge } from "../../actions";
import CreateLogForm from "./CreateLogForm";
import ErrorMessages from "./components/ErrorMessages";
import Navbar from "./Navbar";
import NewItemModal from "./pages/DetailedItemsPage/NewItemModal";

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
