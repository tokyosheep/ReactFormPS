"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

const csInterface = new CSInterface();
themeManager.init();
const app = document.getElementById("app");
ReactDOM.render(<Layout />,app);