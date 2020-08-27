import React from "react";
import ReactDom from "react-dom";

const Modal = ({ onDismiss, children, includeForm, formObj }) => {
  const M = () => (
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        {children}
      </div>
    </div>
  );
  const T = () =>
    includeForm ? (
      <form {...formObj}>
        <M />
      </form>
    ) : (
      <M />
    );
  return ReactDom.createPortal(<T />, document.querySelector("#modal"));
};

export default Modal;
