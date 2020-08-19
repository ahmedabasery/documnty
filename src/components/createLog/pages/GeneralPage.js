import React from "react";
import "../CreateLogForm.css";
import { Field } from "redux-form";
import { connect } from "react-redux";

import TextField from "./components/TextField";
import HeaderSegment from "./components/HeadedSegment";
import DropDown from "./components/Dropdown";
import TextInput from "./components/TextInput";
import CheckBoxList from "./components/CheckBoxList";

class GeneralPage extends React.Component {
  checkBoxReasons = [
    { label: "Information", value: "info" },
    { label: "As Reuested", value: "requested" },
    { label: "Review", value: "review" },
    { label: "Comments", value: "comments" },
    { label: "Submission", value: "submittion" },
  ];
  names = [
    { text: "Ahmed", value: "1111" },
    { text: "Mohammed", value: "1851" },
    { text: "Alaa", value: "1185" },
    { text: "Rana", value: "1481" },
    { text: "Obad", value: "1196" },
    { text: "Dina", value: "1164" },
    { text: "Ali", value: "1178" },
  ];
  isSegmentError(list) {
    for (const i in list) {
      if (this.props.errorList.indexOf(list[i]) !== -1) return true;
    }
    return false;
  }
  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="eleven wide column">
            <div className="ui grid">
              <div className="two column row">
                <div className="column">
                  <HeaderSegment
                    header="From"
                    showError={
                      this.isSegmentError([
                        "general_from_transBy",
                        "general_from_company",
                        "general_from_address",
                      ]) && this.props.error.show
                    }
                  >
                    <Field
                      name="general_from_transBy"
                      component={DropDown}
                      label="Transmitted By"
                      data={this.names}
                      defaulText="Choose a name"
                      showError={this.props.error.show}
                    />
                    <Field
                      name="general_from_company"
                      component={DropDown}
                      label="Company"
                      data={this.names}
                      defaulText="Company .."
                      showError={this.props.error.show}
                    />
                    <Field
                      name="general_from_address"
                      component={TextField}
                      label="Address"
                      rows="3"
                      showError={this.props.error.show}
                    />
                  </HeaderSegment>
                </div>
                <div className="column">
                  <HeaderSegment
                    header="To"
                    showError={
                      this.isSegmentError([
                        "general_to_att",
                        "general_to_company",
                        "general_to_address",
                      ]) && this.props.error.show
                    }
                  >
                    <Field
                      name="general_to_att"
                      component={DropDown}
                      label="Attention"
                      data={this.names}
                      defaulText="Choose a name"
                      showError={this.props.error.show}
                    />
                    <Field
                      name="general_to_company"
                      component={DropDown}
                      label="Company"
                      data={this.names}
                      defaulText="Company .."
                      showError={this.props.error.show}
                    />
                    <Field
                      name="general_to_address"
                      component={TextField}
                      label="Address"
                      rows="3"
                      showError={this.props.error.show}
                    />
                  </HeaderSegment>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <HeaderSegment
                    header="Delivery"
                    showError={
                      this.isSegmentError([
                        "general_delivery_via",
                        "general_delivery_trackNum",
                      ]) && this.props.error.show
                    }
                  >
                    <div className="ui grid">
                      <div className="two column row">
                        <div className="column">
                          <Field
                            name="general_delivery_via"
                            component={DropDown}
                            label="Deliverd via"
                            data={this.names}
                            defaulText="Company .."
                            showError={this.props.error.show}
                          />
                        </div>
                        <div className="column">
                          <Field
                            name="general_delivery_trackNum"
                            component={TextInput}
                            label="Tracking Number"
                            defaultText="Tracking Number"
                            showError={this.props.error.show}
                          />
                        </div>
                      </div>
                    </div>
                  </HeaderSegment>
                </div>
              </div>
            </div>
          </div>
          <div className="five wide column">
            <div id="transferedforsegment">
              <HeaderSegment header="Treansfered for" height="403px">
                <div className="column">
                  <Field
                    name="general_checkBox"
                    component={CheckBoxList}
                    list={this.checkBoxReasons}
                  />
                </div>
                <div className="column">
                  <Field
                    name="general_for_other"
                    component={TextInput}
                    label="Other reasons"
                  />
                </div>
              </HeaderSegment>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="column">
            <div className="ui segment">
              <Field
                name="general_remarks"
                component={TextField}
                rows="2"
                label="Remarks"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ error, form }) => {
  const list = form.createLogForm.syncErrors
    ? form.createLogForm.syncErrors
    : [];
  return { error, errorList: Object.keys(list) };
};
export default connect(mapStateToProps)(GeneralPage);
