import React from "react";

export default ({ input, meta, defaultText, label }) => {
  return (
    <div className="ui form ">
      <div className="field">
        <label>{label}</label>
        <div className="ui input">
          <input
            {...input}
            type="text"
            placeholder={defaultText}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};
