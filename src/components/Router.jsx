import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Docs from "../pages/Docs";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="pt-20">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/docs" component={Docs} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
