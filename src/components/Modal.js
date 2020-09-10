import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const Modal = ({ onDismiss, children }) => {
  const M = () => (
    <div
      onClick={onDismiss}
      className="ui dimmer modals visible active fix-position"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active fix-position"
      >
        {children}
      </div>
    </div>
  );
  return ReactDom.createPortal(<M />, document.querySelector("#modal"));
};

export default Modal;
