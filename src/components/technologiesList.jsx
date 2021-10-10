import React from "react"
import Progress from "./progress.jsx"
import PropTypes from 'prop-types'

const TechnologiesList = ({ technologies }) => {
	console.log(technologies)
	return (
		<>
			{technologies.map((technology, index, arr) => {
				return <Progress key={technology._id} scalePercentage={technology.percentageOfOwnership} name={technology.name} color={technology.color} />
			})}
		</>
	)
}

TechnologiesList.propTypes = {
	technologies: PropTypes.array
}

export default TechnologiesList
