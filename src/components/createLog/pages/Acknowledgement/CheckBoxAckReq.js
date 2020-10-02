import React from "react";
import { connect } from "react-redux";
import { resetAckRec } from "../../../../actions";

const CheckBox = ({ input, label, resetAckRec }) => {
  return (
    <div className="inline field">
      <div className="ui checkbox">
        <input
          {...input}
          onChange={(nv) => {
            if (nv.currentTarget.value) resetAckRec();
            input.onChange(nv);
          }}
          type="checkbox"
        />
        <label>{label}</label>
      </div>
    </div>
  );
};

export default connect(null, { resetAckRec })(CheckBox);
