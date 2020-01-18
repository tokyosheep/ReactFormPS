"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

themeManager.init();
const app = document.getElementById("app");
ReactDOM.render(<Layout />,app);