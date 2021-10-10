import React from "react";
import FavoritesCard from "../components/favoritesCard";


const FavoritesUsers = () => {
   return (
      <>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6">
          <div className="section_heading text-center wow fadeInUp" dataWowDelay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
            <h3>Favorites <span> Users</span></h3>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="row">
      <FavoritesCard />
      </div>
    </div>
      </>
   );
}
 
export default FavoritesUsers;