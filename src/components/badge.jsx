import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({color, text}) => {
	return <span className={`badge bg-${color}`}>{text}</span>
}

Badge.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
}

export default Badge