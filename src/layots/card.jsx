import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import API from "../API/index.js"
import Spinner from "../components/spinner"
import SocialIconsList from "../components/socialIconsList.jsx"
import Button from "../components/button.jsx"
import TechnologiesList from "../components/technologiesList.jsx"

const Card = () => {
  const params = useParams()
  const { developerId } = params
  const [user, setUser] = useState()
  useEffect(() => {
    API.getById(developerId).then((data) => {
      setUser(data)
    })
  }, [developerId])

  if (user) {
    return (
      <div className="container mt-5">
        <div className="col-lg-12">
          <div className="card mt-4">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                  <div className="p-3">
                    <img
                      className="w-100 border-radius-md shadow-lg"
                      src={`${process.env.PUBLIC_URL}/images/photoDevelopers/${user.photo}`}
                      alt="Фотография разработчика"
                    />
                  </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                <div className="card-body">
                  <div className="row d-flex justify-content-center">
                    <h1 className="text-center mt-3">
                      {user.name} {user.surname}{" "}
                      <span className="badge bg-danger">Teamlead</span>
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
    )
  }
  return <Spinner />
}
export default Card
