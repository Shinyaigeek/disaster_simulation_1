import * as React from "react";
import ReactDOM from "react-dom";
import { LineChart } from "./LineChart";

const App = () => {
  return (
    <div>
      <LineChart />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("_app"));
