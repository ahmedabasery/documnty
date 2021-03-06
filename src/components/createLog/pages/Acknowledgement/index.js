import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import CheckBoxAckReq from "./CheckBoxAckReq";
import CheckBox from "../../components/CheckBox";
import Dropdown from "../../components/Dropdown";
import HeadedSegment from "../../components/HeadedSegment";
import TextField from "../../components/TextField";
import TextInput from "../../components/TextInput";

const names = [
  { text: "Ahmed", value: "1111" },
  { text: "Mohammed", value: "1851" },
  { text: "Alaa", value: "1185" },
  { text: "Rana", value: "1481" },
  { text: "Obad", value: "1196" },
  { text: "Dina", value: "1164" },
  { text: "Ali", value: "1178" },
];
const isSegmentError = (list, errorList) => {
  for (const i in list) {
    if (errorList.indexOf(list[i]) !== -1) return true;
  }
  return false;
};
const Acknoeledgement = ({
  ack_rece_check,
  ack_required,
  errorList,
  submitFailed,
}) => (
  <div className="ui grid continer">
    <div className="row">
      <div className="ten wide column">
        <Field
          name="ack_required"
          component={CheckBoxAckReq}
          label="Acknowledgement Required"
        />
        {ack_required && (
          <div className="ui segment">
            <Field
              name="ack_notes"
              component={TextField}
              rows="10"
              label="Notes    "
            />
          </div>
        )}
      </div>
      {ack_required && (
        <div className="six wide column">
          <Field
            name="ack_rece_check"
            component={CheckBox}
            label="Acknowledged"
          />
          {ack_rece_check && (
            <HeadedSegment
              header="Reply details"
              showError={
                isSegmentError(
                  ["ack_rece_date", "ack_rece_by", "ack_rec_company"],
                  errorList
                ) && submitFailed
              }
            >
              <Field
                name="ack_rece_date"
                component={TextInput}
                label="Date"
                showError={submitFailed}
              />
              <Field
                name="ack_rece_by"
                component={Dropdown}
                data={names}
                label="Acknowledged by"
                showError={submitFailed}
              />
              <Field
                name="ack_rec_company"
                component={Dropdown}
                data={names}
                label="Company"
                showError={submitFailed}
              />
            </HeadedSegment>
          )}
        </div>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ form }) => {
  const clForm = form ? form.createLogForm : {};
  const clFormValues = clForm.values ? clForm.values : {};
  const list = clForm.syncErrors ? clForm.syncErrors : [];
  return {
    ack_rece_check: clFormValues.ack_rece_check
      ? clFormValues.ack_rece_check
      : false,
    ack_required: clFormValues.ack_required ? clFormValues.ack_required : false,
    errorList: Object.keys(list),
    submitFailed: clForm.submitFailed ? clForm.submitFailed : false,
  };
};

export default connect(mapStateToProps)(Acknoeledgement);
