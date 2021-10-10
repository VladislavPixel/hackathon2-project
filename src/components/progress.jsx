import React from 'react'
import '../style/progress.css'
import PropTypes from 'prop-types'

const Progress = ({scalePercentage, name, color}) => {
	return(
		<div className="progress-block">
			<h2 className="progress-block__title">{name}</h2>
			<div className="progress-block__body progress">
				<div className={`progress-bar progress-bar-striped bg-${color}`} role="progressbar" style={{width: `${scalePercentage}%`}} aria-valuenow={Number(scalePercentage)} aria-valuemin="0" aria-valuemax="100">{`${scalePercentage}%`}</div>
			</div>
		</div>
	)
}

Progress.propTypes = {
	scalePercentage: PropTypes.string,
	name: PropTypes.string,
	color: PropTypes.string
}

export default Progress