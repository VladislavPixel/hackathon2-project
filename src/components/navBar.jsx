import React from 'react'
import '../style/navBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return(
		<ul className="nav">
			<li className="nav-item">
				<Link className="nav-link" to="/">Главная</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/favorites">Избранные</Link>
			</li>
		</ul>
	)
}

export default NavBar