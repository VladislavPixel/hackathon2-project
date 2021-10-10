import React, {useState} from 'react'
import '../style/navBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
	const links = [
		{_id: 1, text: 'HiPage', path: '/'},
		{_id: 2, text: 'Главная', path: '/home'},
		{_id: 3, text: 'Избранные', path: '/favorites'}
	]
	const [currentPage, setCurrentPage] = useState(1)
	const handlerUpdateCurrentPage = (id) => {
		setCurrentPage(id)
	}

	return(
		<div className="nav-container">
			<ul className="nav">
				{links.map((el, i, arr) => {
					return(
						<li key = {el._id} className="nav-item">
							<Link onClick = {() => handlerUpdateCurrentPage(el._id)} className={"nav-link" + (currentPage === el._id ? ' active' : '')} to={el.path}>{el.text}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default NavBar