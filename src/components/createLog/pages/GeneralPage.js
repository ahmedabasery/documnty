import React from "react";
import "../CreateLogForm.css";
import { Field } from "redux-form";

import TextField from "./components/TextField";
import HeaderSegment from "./components/HeadedSegment";
import CheckBox from "./components/CheckBox";
import DropDown from "./components/Dropdown";
import TextInput from "./components/TextInput";

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
  renderCheckList() {
    return this.checkBoxReasons.map((chB) => {
      return (
        <Field
          key={chB.value}
          name={`general.for.${chB.value}`}
          component={CheckBox}
          label={chB.label}
        />
      );
    });
  }
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
                      name="general.from.transBy"
                      component={DropDown}
                      label="Transmitted By"
                      data={this.names}
                      defaulText="Choose a name"
                    />
                    <Field
                      name="general.from.company"
                      component={DropDown}
                      label="Company"
                      data={this.names}
                      defaulText="Company .."
                    />
                    <Field
                      name="general.from.address"
                      component={TextField}
                      label="Address"
                      rows="3"
                    />
                  </HeaderSegment>
                </div>
                <div className="column">
                  <HeaderSegment header="To">
                    <Field
                      name="general.to.att"
                      component={DropDown}
                      label="Attention"
                      data={this.names}
                      defaulText="Choose a name"
                    />
                    <Field
                      name="general.to.company"
                      component={DropDown}
                      label="Company"
                      data={this.names}
                      defaulText="Company .."
                    />
                    <Field
                      name="general.to.address"
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
                            name="general.delivery.via"
                            component={DropDown}
                            label="Deliverd via"
                            data={this.names}
                            defaulText="Company .."
                          />
                        </div>
                        <div className="column">
                          <Field
                            name="general.delivery.trackNum"
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
                <div className="column">{this.renderCheckList()}</div>
                <div className="column">
                  <Field
                    name="general.for.other"
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
                name="general.remarks"
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
