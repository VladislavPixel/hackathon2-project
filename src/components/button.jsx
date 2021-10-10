import React from "react"
import PropTypes from 'prop-types'

const Button = ({ func, color, nameBtn, typeForm }) => {
  function getFormBtn(form) {
    const styles = { fontSize: "20px" };
    if (form === "sharp") {
      styles.borderRadius = "0px";
    } else if (form === "remove") {
      styles.width = "100%";
      styles.height = "40%";
    }
    return styles;
  }
  return (
    <button
      onClick={func}
      style={getFormBtn(typeForm)}
      type="button"
      className={`btn btn-${color}`}
    >
      {nameBtn}
    </button>
  )
}

Button.propTypes = {
	func: PropTypes.func,
	color: PropTypes.string,
	nameBtn: PropTypes.string,
	typeForm: PropTypes.string
}

export default Button
