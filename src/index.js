import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab, fas);

ReactDOM.render(<App />, document.getElementById("root"));
