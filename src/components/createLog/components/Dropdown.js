import React from "react";
import { Dropdown } from "semantic-ui-react";

export default ({
  input,
  meta,
  data = [],
  label,
  defaulText = "",
  showError = false,
}) => {
  const Er = meta.error && showError;
  return (
    <div className="ui form">
      <div className="field">
        <label className={`${Er ? "error" : ""}`}>{label}</label>
        <Dropdown
          placeholder={defaulText}
          fluid
          search
          selection
          error={Er}
          options={data}
          onChange={(e, v) => input.onChange(v.value)}
          value={input.value}
        />
      </div>
    </div>
  );
};
