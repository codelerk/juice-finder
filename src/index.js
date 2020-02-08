import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Navigate from "./Components/navbar";
import HouseJuice from "./Components/juiceShower";
import "./css/index.css";

function App() {
  return (
    <Fragment>
      <Navigate />
      <HouseJuice />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
