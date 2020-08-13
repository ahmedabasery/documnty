import React from "react";
import { reduxForm } from "redux-form";
import Tap from "./Tap";
import GeneralPage from "./pages/GeneralPage";
import "./CreateLogForm.css";

const PC = [
  { name: "Generel", Component: <h2>Page 1</h2> },
  { name: "Page 2", Component: <h2>Page 2</h2> },
  { name: "Page 3", Component: <h2>Page 3</h2> },
  { name: "Page 4", Component: <h2>Page 4</h2> },
];

class CreateLogForm extends React.Component {
  state = { activePage: PC[0] };

  renderPageNav() {
    return PC.map((page) => {
      return (
        <div
          key={page.name}
          className={`item my-pointer${
            page.name === this.state.activePage.name ? " active" : ""
          }`}
          onClick={() => this.setState({ activePage: page })}
        >
          {page.name}
        </div>
      );
    });
  }
  isActive = (pageName) => pageName === this.state.activePage.name;
  render() {
    return (
      <form onSubmit={this.props.handleSubmit((fV) => this.props.onSubmit(fV))}>
        <div className=" ui grid">
          <div className="row">
            <div className="three wide column Gogo "></div>
            <div className="four wide column Gogo "></div>
            <div className="four wide column Gogo "></div>
            <div className="four wide column Gogo "></div>
            <div className="one wide column Gogo "></div>
          </div>
          <div className="row">
            <div className="ui four item menu">{this.renderPageNav()}</div>
          </div>
          <div className="row">
            <Tap isActive={this.isActive(PC[0].name)}>
              <GeneralPage />
            </Tap>
            <Tap isActive={this.isActive(PC[1].name)}>{PC[1].Component}</Tap>
            <Tap isActive={this.isActive(PC[2].name)}>{PC[2].Component}</Tap>
            <Tap isActive={this.isActive(PC[3].name)}>{PC[3].Component}</Tap>
          </div>
        </div>
      </form>
    );
  }
}

const form_names = [
  "general_delivery_trackNum",
  "general_delivery_via",
  "general_for_other",
  "general_from_address",
  "general_from_company",
  "general_from_transBy",
  "general_to_address",
  "general_to_att",
  "general_to_company",
];

const validate = (formValues, { setEH }) => {
  const error = {};
  let E = false;
  //mandtory
  form_names.forEach((name) => {
    if (!formValues[name]) {
      error[name] = `${name} is required`;
      E = true;
    }
  });
  setEH(E, error);
  return error;
};

export default reduxForm({
  form: "createLogForm",
  validate: validate,
})(CreateLogForm);
