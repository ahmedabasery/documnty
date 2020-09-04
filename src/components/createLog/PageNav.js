import React from "react";
import { connect } from "react-redux";
import { containsAny } from "../../library";
import PC from "./PagesConfiguration";

const PageNav = ({ clForm, activePage, setActivePage }) => {
  return PC.map((page, pageN) => {
    const tapError =
      clForm.submitFailed &&
      containsAny(
        page.fieldNamesToCheck,
        Object.keys(clForm ? (clForm.syncErrors ? clForm.syncErrors : []) : [])
      );
    return (
      <div
        key={page.name}
        className={`item my-pointer${
          page.name === PC[activePage].name ? " active" : ""
        }${tapError ? " errorTap" : ""}`}
        onClick={() => setActivePage(pageN)}
      >
        {page.name}
      </div>
    );
  });
};

const mapStateToProps = ({ form }) => {
  return {
    clForm: form.createLogForm ? form.createLogForm : {},
  };
};
export default connect(mapStateToProps)(PageNav);
