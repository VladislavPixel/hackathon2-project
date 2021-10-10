import React, {useState, useEffect} from 'react'
import '../style/breadcrumbs.css'
import { useLocation, Link } from 'react-router-dom'

const Breadcrumbs = () => {
	let location = useLocation()
	const [statePath, setStatePath] = useState()
	function getArrayBread(){
		let arrayCrumbs
		if(statePath?.length !== 1){
			arrayCrumbs = statePath?.slice(1).split('/')
		}
		return arrayCrumbs
	}
	let arrayCrumbs = getArrayBread()
	useEffect(() => {
		setStatePath(location.pathname)
	}, [location])
	function getPath(index){
		const arrayFilter = arrayCrumbs.filter((item, ind, arr) => {
			return ind <= index
		})
		return arrayFilter.join('/')
	}
	return(
		arrayCrumbs ?
		<div className="breadcrumb-container">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<span style={{display: 'inline-block', marginRight: '5px', fontSize: '20px'}}>/</span>{arrayCrumbs.map((el, index, arr) => {
						return <li key={index} className="breadcrumb-item"><Link to={`/${getPath(index)}`}>{`${el}`}</Link></li>
					})}
				</ol>
			</nav>
		</div> : null
	)
}

export default Breadcrumbs