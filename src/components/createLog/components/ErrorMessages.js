import React from "react";

export default ({
  condition = true,
  onCloseClick = () =>
    console.log("Error , there is no given action to this close click"),
  label = "Error message",
  messages = [],
}) => {
  if (!condition) {
    return null;
  }
  return (
    <div className="ui negative message">
      <i className="close icon" onClick={onCloseClick}></i>
      <div className="header">{label}</div>
      {messages.map((message, i) => {
        return <p key={i}>{message}</p>;
      })}
    </div>
  );
};
