import React, { useEffect, useState } from "react";
import "../style/developersAndCardDeveloper.css";
import API from "../API/index.js";
import DeveloperCard from "../components/developerСard.jsx";
import Spinner from "../components/spinner.jsx";

const HomePage = () => {
  const [developers, setDevelopers] = useState();
  useEffect(() => {
    API.getAllDevelopers().then((data) => {
      setDevelopers(data);
    });
  });
  return (
    <div className="developers-container">
      {developers ? (
        developers.map((developer, index, arr) => {
          return <DeveloperCard key={developer._id} {...developer} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default HomePage;
