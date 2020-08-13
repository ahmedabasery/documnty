import React from "react";
import { Dropdown } from "semantic-ui-react";

export default ({ input, meta, data = [], label, defaulText = "" }) => {
  return (
    <div className="ui form">
      <div className="field">
        <label>{label}</label>
        <Dropdown
          placeholder={defaulText}
          fluid
          search
          selection
          options={data}
          onChange={(e, v) => input.onChange(v.value)}
          value={input.value}
        />
      </div>
    </div>
  );
};
