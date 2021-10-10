import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/navBar.jsx'
import HomePage from './layots/homePage.jsx'
import NotFaundPage from './layots/notFaundPage.jsx'

function App() {
	return (
		<React.Fragment>
				<NavBar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/notfaund" component={NotFaundPage} />
					<Redirect to="/notfaund" />
				</Switch>
		</React.Fragment>
	)
}

export default App
