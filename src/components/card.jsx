import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Spinner from "../components/spinner";
import SocialIconsList from "./socialIconsList";
import Button from "./button";
import TechnologiesList from "./technologiesList";
import API from "../API/index";
import Badge from "./badge";

const Card = () => {
  const params = useParams();
  const { userId } = params;
  const [user, setUser] = useState();

  useEffect(() => {
    API.getById(userId).then((data) => {
      setUser(data);
    });
  }, []);

  const teamleadToggle = () => {
    let isTeamlead = !user.contributionToTheDevelopment.indexOf("Тимлид");
    console.log("isTeamlead", isTeamlead);
    return isTeamlead && <Badge text="Teamlead" color="danger" />;
  };

  if (user) {
    return (
      <div className="container mt-5">
        <div className="col-lg-12">
          <div className="card mt-4">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <a href="javascript:;">
                  <div className="p-3">
                    <img
                      className="w-100 border-radius-md shadow-lg"
                      src={`${process.env.PUBLIC_URL}/images/photoDevelopers/${user.photo}`}
                      alt="image"
                    />
                  </div>
                </a>
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                <div className="card-body">
                  <div className="row d-flex justify-content-center">
                    <h1 className="text-center mt-3">
                      {user.name} {user.surname} {teamleadToggle()}
                    </h1>
                    <div className="row mb-4">
                      <div className="col-auto">
                        <span>AGE</span> &nbsp;
                        <span className="h5">{user.age}</span>
                      </div>
                    </div>
                    <dl className="row">
                      <dt className="col-sm-3">О себе</dt>
                      <dd className="col-sm-9">{user.infoAboutMe}</dd>
                      <dt className="col-sm-3">
                        Чем занимался в разработке данного проекта
                      </dt>
                      <dd className="col-sm-9">
                        {user.contributionToTheDevelopment}
                      </dd>
                    </dl>
                  </div>
                  <div className="row justify-content-center text-center mt-4">
                    <TechnologiesList technologies={user.technologies} />
                  </div>
                  <div className="row social-icons mt-4">
                    <SocialIconsList iconList={user.linksToSocialNetworks} />
                  </div>

                  <div className="row mt-4">
                    <Button
                      color="danger"
                      nameBtn="Добавить в избранное"
                      typeForm="sharp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Spinner />;
};
export default Card;
