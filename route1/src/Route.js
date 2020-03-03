import React from "react";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Message from "./Message";
import Home from "./Home";
import MessageDetails from "./MessageDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/message" component={Message} />
          <Route path="/message/:id" component={MessageDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
