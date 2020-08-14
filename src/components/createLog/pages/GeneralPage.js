import React from "react";
import "../CreateLogForm.css";
import { Field } from "redux-form";

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
  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="eleven wide column">
            <div className="ui grid">
              <div className="two column row">
                <div className="column">
                  <HeaderSegment header="From">
                    <Field
                      name="general_from_transBy"
                      component={DropDown}
                      label="Transmitted By"
                      data={this.names}
                      defaulText="Choose a name"
                    />
                    <Field
                      name="general_from_company"
                      component={DropDown}
                      label="Company"
                      data={this.names}
                      defaulText="Company .."
                    />
                    <Field
                      name="general_from_address"
                      component={TextField}
                      label="Address"
                      rows="3"
                    />
                  </HeaderSegment>
                </div>
                <div className="column">
                  <HeaderSegment header="To">
                    <Field
                      name="general_to_att"
                      component={DropDown}
                      label="Attention"
                      data={this.names}
                      defaulText="Choose a name"
                    />
                    <Field
                      name="general_to_company"
                      component={DropDown}
                      label="Company"
                      data={this.names}
                      defaulText="Company .."
                    />
                    <Field
                      name="general_to_address"
                      component={TextField}
                      label="Address"
                      rows="3"
                    />
                  </HeaderSegment>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <HeaderSegment header="Delivery">
                    <div className="ui grid">
                      <div className="two column row">
                        <div className="column">
                          <Field
                            name="general_delivery_via"
                            component={DropDown}
                            label="Deliverd via"
                            data={this.names}
                            defaulText="Company .."
                          />
                        </div>
                        <div className="column">
                          <Field
                            name="general_delivery_trackNum"
                            component={TextInput}
                            label="Tracking Number"
                            defaultText="Tracking Number"
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

export default GeneralPage;
