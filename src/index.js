import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import App1 from "./App1";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App1 />
  </StrictMode>,
  rootElement
);
