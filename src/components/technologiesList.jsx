import React from "react";

const TechnologiesList = ({ technologies }) => {
  console.log("technologies", technologies);

  return (
    <>
      {technologies.map((technology) => {
        return (
          <div className="col-md-3" key={technology._id}>
            <h1 className="text-gradient text-info" id="state1" countto="5234">
              {technology.percentageOfOwnership}
            </h1>
            <h5>{technology.name}</h5>
          </div>
        );
      })}
    </>
  );
};

export default TechnologiesList;
