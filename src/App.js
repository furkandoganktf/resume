import React, { Component } from "react";
import ReactGA from "react-ga";
import Homepage from "./Components/Homepage.js";
import Aboutme from "./Components/Aboutme.js";

import Readinglist from "./Components/ReadingList/ReadingList";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <Switch>
          <Route exact path="/" render={props => <Homepage {...props} />} />
          <Route path="/reading" render={props => <Readinglist {...props} />} />
          <Route path="/me" render={props => <Aboutme {...props} />} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
