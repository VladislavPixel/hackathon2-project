import React from 'react'
import '../style/helloPage.css'

const HelloPage = () => {
	return(
		<div className="hello-container">
			<div className="hello-container__body">
				<h1 className="hello-container__title">Привествуем тебя в тихой гавани веб-разработчиков</h1>
				<p className="hello-container__quote">«Скорость имеет значение»</p>
				<div className="hello-container__author">Павел Дуров.</div>
			</div>
		</div>
	)
}

export default HelloPage