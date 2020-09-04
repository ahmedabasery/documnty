import React from "react";
import PC from "./PagesConfiguration";
import PageNav from "./PageNav";
import Tap from "./Tap";
import GeneralPage from "./pages/GeneralPage";
import DetailedItemsPage from "./pages/DetailedItemsPage";

export default () => {
  const [activePage, setActivePage] = React.useState(1);

  const isActive = (pageName) => pageName === PC[activePage].name;
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
        <div className="ui four item menu">
          <PageNav
            activePage={activePage}
            setActivePage={(p) => setActivePage(p)}
          />
        </div>
      </div>
      <div className="row">
        <Tap isActive={isActive(PC[0].name)}>
          <GeneralPage />
        </Tap>
        <Tap isActive={isActive(PC[1].name)}>
          <DetailedItemsPage />
        </Tap>
        <Tap isActive={isActive(PC[2].name)}>{PC[2].Component}</Tap>
        <Tap isActive={isActive(PC[3].name)}>{PC[3].Component}</Tap>
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
              activePage === PC.length - 1 ? "disabled " : ""
            }button`}
            onClick={() => {
              if (activePage !== PC.length - 1) setActivePage(activePage + 1);
            }}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};
