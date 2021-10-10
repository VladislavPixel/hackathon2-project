import React from 'react'

const Badge = ({color, text}) => {
	return <span className={`badge bg-${color}`}>{text}</span>
}

export default Badge