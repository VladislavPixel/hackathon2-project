import React from "react";
import "../style/favorites.css";
import Badge from "./badge";
import Button from "./button";

const FavoriteDevCard = ({
  _id,
  name,
  surname,
  age,
  infoAboutMe,
  photo,
  contributionToTheDevelopment,
  technologies,
  removeFromFavorites,
}) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div
        className="single_advisor_profile wow fadeInUp"
        style={{
          visibility: "visible",
          animationDelay: "0.2s",
          animationName: "fadeInUp",
        }}
      >
        <div className="advisor_thumb">
          <img
            src={`${process.env.PUBLIC_URL}/images/photoDevelopers/${photo}`}
            alt=""
          />
        </div>
        <div className="single_advisor_details_info">
          <h1>{`${name} ${surname}`}</h1>
          <h2 className="age">Возраст: {age}</h2>
          <p>{contributionToTheDevelopment}</p>
          <p>{infoAboutMe}</p>
          {technologies.map((t) => (
            <Badge key={t._id} color="primary" text={t.name} />
          ))}
          <Button
            color="danger"
            nameBtn="Удалить"
            typeForm="remove"
            onClick={() => removeFromFavorites(_id)}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteDevCard;