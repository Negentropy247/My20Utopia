import React from "react";
import "./App.scss";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = () => {
  const ele = useRoutes(routes);
  return <div className="app">{ele}</div>;
};

export default App;
