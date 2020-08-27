import React from "react";

const PopUpMessage = ({ title, content, actions }) => {
  return (
    <React.Fragment>
      <div className="header">{title}</div>
      <div className="content">{content}</div>
      <div className="actions">{actions}</div>
    </React.Fragment>
  );
};

export default PopUpMessage;
