import React from "react";

export default ({ input, meta, label }) => {
  return (
    <div className="inline field">
      <div className="ui checkbox">
        <input {...input} type="checkbox" />
        <label>{label}</label>
      </div>
    </div>
  );
};
