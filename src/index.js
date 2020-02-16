import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Home from "./Views/Home";
import "./css/index.css";

function App() {
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
