import React from "react";
import { tapsName, tapComponent } from "./PagesConfiguration";
import PageNav from "./PageNav";
import Tap from "./Tap";

export default () => {
  const [activePage, setActivePage] = React.useState(0);

  const isActive = (pageName) => pageName === tapsName[activePage];
  return (
    <div className=" ui grid">
      <div className="row">
        <div className="three wide column Gogo "></div>
        <div className="four wide column Gogo "></div>
        <div className="four wide column Gogo "></div>
        <div className="four wide column Gogo "></div>
        <div className="one wide column Gogo "></div>
      </div>
      <div className="row">
        <PageNav
          activePage={activePage}
          setActivePage={(p) => setActivePage(p)}
        />
      </div>
      <div className="row">
        {tapComponent.map((TapComponent, i) => (
          <Tap isActive={isActive(tapsName[i])}>
            <TapComponent />
          </Tap>
        ))}
      </div>
      <div className="row">
        <div className="ui container">
          <button
            className="ui positive small right floated button"
            type="submit"
            form="createLogForm"
          >
            Submit
          </button>
          <div
            className={`ui small ${
              activePage === 0 ? "disabled " : ""
            }left attached button`}
            onClick={() => {
              if (activePage !== 0) setActivePage(activePage - 1);
            }}
          >
            Back
          </div>
          <div
            className={`right attached ui small ${
              activePage === tapsName.length - 1 ? "disabled " : ""
            }button`}
            onClick={() => {
              if (activePage !== tapsName.length - 1)
                setActivePage(activePage + 1);
            }}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};
