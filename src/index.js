import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Navigate from "./Components/navbar";
import "./css/index.css";

function App() {
  return (
    <Fragment>
      <Navigate />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
