import React, {useState} from 'react'
import '../style/navBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const links = [
		{_id: 1, text: 'Главная', path: '/'},
		{_id: 2, text: 'Избранные', path: '/favorites'}
	]
	const handlerUpdateCurrentPage = (id) => {
		setCurrentPage(id)
	}
	return(
		<ul className="nav">
			{links.map((el, i, arr) => {
				return(
					<li key = {el._id} className="nav-item">
						<Link onClick = {() => handlerUpdateCurrentPage(el._id)} className={"nav-link" + (currentPage === el._id ? ' active' : '')} to={el.path}>{el.text}</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default NavBar