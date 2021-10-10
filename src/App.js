import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import NavBar from "./components/navBar.jsx"
import HomePage from "./layots/homePage.jsx"
import FavoritesDevelopers from "./layots/favoritesDevelopers"
import Card from "./layots/card"
import HelloPage from "./layots/helloPage.jsx"
import NotFaundPage from "./layots/notFaundPage.jsx"
import Breadcrumbs from "./components/breadcrumbs.jsx"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <React.Fragment>
      <NavBar />
			<Breadcrumbs />
      <Switch>
				<Route path="/favorites" component={FavoritesDevelopers} />
				<Route path="/home/:developerId" component={Card} />
				<Route path="/home" component={HomePage} />
				<Route path="/notfaund" component={NotFaundPage} />
        <Route path="/" exact component={HelloPage} />
				<Redirect from="/home-main" to="/home" />
        <Redirect to="/notfaund" />
      </Switch>
    </React.Fragment>
  )
}
export default App
