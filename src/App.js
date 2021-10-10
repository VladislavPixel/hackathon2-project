import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "./components/card.jsx";
import NavBar from "./components/navBar.jsx";
import HomePage from "./layots/homePage.jsx";
import NotFaundPage from "./layots/notFaundPage.jsx";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/notfaund" component={NotFaundPage} />
        <Route path="/users/:userId" component={Card} />
        <Redirect to="/notfaund" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
