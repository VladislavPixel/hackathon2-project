import React from "react";
import Button from "./button.jsx";
import Badge from "./badge.jsx";
import { Link, useHistory } from "react-router-dom";

const DeveloperCard = ({ _id, name, surname, age, photo, infoAboutMe }) => {
	const history = useHistory()
	function openDeveloper(){
		history.push(`/developerId:${_id}`)
	}
  return (
    <div className="card-developer">
      <div className="card-developer__column">
        <div className="card-developer__photo-dev">
          <img
            src={`${process.env.PUBLIC_URL}/images/photoDevelopers/${photo}`}
            alt="Фотографи разработчика"
          />
        </div>
      </div>
      <div className="card-developer__column">
        <div className="card-developer__fio">
          <Badge text={name} color="secondary" />{" "}
          <Badge text={surname} color="dark" />
        </div>
        <div className="card-developer__age">{`Возраст: ${age}`}</div>
        <div className="card-developer__info">{infoAboutMe}</div>
        <div className="card-developer__btns">
          <Link to={`/${_id}`}>
            <Button func={openDeveloper} color="primary" nameBtn="Открыть" typeForm="rounded" />
          </Link>
          <Button
            color="success"
            nameBtn="Добавить в избранное"
            typeForm="sharp"
          />
        </div>
      </div>
    </div>
  )
}

export default DeveloperCard;
