import React from "react"
import PropTypes from 'prop-types'

const SocialIconsList = ({ iconList }) => {
	return (
		<ul className="navbar-nav flex-row d-flex justify-content-center">
			{iconList.map((icon) => {
				const nameBootstrapIcons = [
					"telegram",
					"facebook",
					"twitter",
					"discord",
					"instagram",
					"whatsapp",
					"youtube",
					"skype",
					"twitch",
				]
				let iconName = nameBootstrapIcons.includes(icon.name.toLowerCase())
					? icon.name.toLowerCase()
					: "messenger";
				return (
					<li className="navitem me-3" key={icon._id}>
						<a target='_blank' rel="noreferrer" className="navlink" href={icon.link}>
							<i className={`bi bi-${iconName}`}></i>
						</a>
					</li>
				)
			})}
		</ul>
	)
}

SocialIconsList.propTypes = {
	iconList: PropTypes.array
}

export default SocialIconsList
