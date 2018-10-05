import React from "react";
import Panel from "../../components/Panel";

const NoMatch = () => (
  <Panel>
    <h1 className="center-align text-darken-2 red-text">404 Page Not Found
      <span role="img" aria-label="Face With Rolling Eyes Emoji">
        🙄
      </span>
    </h1>
    <form>
      <button className="homeBtn waves-effect hoverable" formAction="/">← Home</button>
    </form>
  </Panel>
);

export default NoMatch;
