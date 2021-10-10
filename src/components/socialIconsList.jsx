import React from "react";

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
        ];
        let iconName = nameBootstrapIcons.includes(icon.name.toLowerCase())
          ? icon.name.toLowerCase()
          : "messenger";
        return (
          <li className="navitem me-3" key={icon._id}>
            <a className="navlink" href={icon.link}>
              <i className={`bi bi-${iconName}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIconsList;
