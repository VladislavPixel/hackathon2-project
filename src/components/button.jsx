import React from "react"

const Button = ({func, color, nameBtn, typeForm}) => {
	function getFormBtn(form){
		const styles = {fontSize: '20px',}
		if(form === 'sharp'){
			styles.borderRadius = '0px'
		}
		return styles
	}
	return <button onClick = {func} style = {getFormBtn(typeForm)} type="button" className={`btn btn-${color}`}>{nameBtn}</button>
}

export default Button
