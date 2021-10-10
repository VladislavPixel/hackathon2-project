import React from "react"

const Button = ({color, nameBtn, typeForm}) => {
	function getFormBtn(form){
		const styles = {fontSize: '20px',}
		if(form === 'sharp'){
			styles.borderRadius = '0px'
		}
		return styles
	}
	return <button style = {getFormBtn(typeForm)} type="button" className={`btn btn-${color}`}>{nameBtn}</button>
}

export default Button
