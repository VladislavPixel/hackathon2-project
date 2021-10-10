import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import HomePage from "./layots/homePage.jsx";
import FavoritesDevelopers from "./layots/favoritesDevelopers";
import Card from "./layots/card";
import NotFaundPage from "./layots/notFaundPage.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/favorites" component={FavoritesDevelopers} />
        <Route path="/notfaund" component={NotFaundPage} />
        <Route path="/:developerId" component={Card} />
        <Redirect to="/notfaund" />
      </Switch>
    </React.Fragment>
  );
}
export default App;
