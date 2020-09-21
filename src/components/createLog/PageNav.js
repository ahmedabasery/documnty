import React from "react";
import { connect } from "react-redux";
import { containsAny } from "../../library";
import PC, { tapsName } from "./PagesConfiguration";

const PageNav = ({ clForm, activePage, setActivePage }) => {
  const fieldNamesHaveError = Object.keys(
    clForm ? (clForm.syncErrors ? clForm.syncErrors : []) : []
  );
  const PageNavItems = tapsName.map((page, pageN) => {
    const fieldNamesToCheck = PC.filter((field) => field.tap === page).map(
      (field) => field.name
    );
    const tapError =
      clForm.submitFailed &&
      containsAny(fieldNamesToCheck, fieldNamesHaveError);

    return (
      <div
        key={page}
        className={`item my-pointer${
          page === tapsName[activePage] ? " active" : ""
        }${tapError ? " errorTap" : ""}`}
        onClick={() => setActivePage(pageN)}
      >
        {page}
      </div>
    );
  });
  return <div className="ui four item menu">{PageNavItems}</div>;
};

const mapStateToProps = ({ form }) => {
  return {
    clForm: form.createLogForm ? form.createLogForm : {},
  };
};
export default connect(mapStateToProps)(PageNav);
