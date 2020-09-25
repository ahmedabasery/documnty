import React from "react";

export default ({
  input,
  meta,
  defaultText,
  label,
  showError = false,
  autofocus = false,
}) => {
  const Er = meta.error && showError;
  const classname = `field${Er ? " error" : ""}`;
  return (
    <div className="ui form ">
      <div className={classname}>
        <label>{label}</label>
        <div className="ui input">
          <input
            {...input}
            type="text"
            placeholder={defaultText}
            autoComplete="off"
            autoFocus={autofocus}
          />
        </div>
      </div>
    </div>
  );
};
