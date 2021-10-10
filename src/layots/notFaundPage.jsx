import React from 'react'
import '../style/not-faund.css'


const NotFaundPage = () => {
	return(
		<div className="not-faund">
			<div className="not-faund__container">
				<h2 className="not-faund__title">Ошибка 404!!!</h2>
				<div className="not-faund__message">Такой страницы не существует на сайте...</div>
			</div>
		</div>
	)
}

export default NotFaundPage