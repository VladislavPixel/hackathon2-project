import React, { useEffect, useState } from "react";
import FavoriteDevCard from "../components/favoriteDevCard";
import { getDevById } from "../API/fake.api/developers.api";

const FavoritesUsers = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const localFavorites = window.localStorage.getItem("favoritesDevs");

      if (!localFavorites) return;

      const favoritesDevs = await JSON.parse(localFavorites);

      if (favoritesDevs.length) {
        const devs = [];

        favoritesDevs.forEach(async (devId) => {
          const dev = await getDevById(devId);
          devs.push(dev);

          if (devs.length === favoritesDevs.length) setFavorites(devs);
        });
      }
    }

    fetchData();
  }, []);

  const removeFromFavorites = (id) => {
    const favoritesDevs = JSON.parse(
      window.localStorage.getItem("favoritesDevs")
    );
    window.localStorage.setItem(
      "favoritesDevs",
      JSON.stringify(favoritesDevs.filter((devId) => devId !== id))
    );
    setFavorites(favorites.filter((dev) => dev._id !== id));
  };

  if (!favorites.length) return <h1>Favorites list is empty</h1>;

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            <div
              className="section_heading text-center wow fadeInUp"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <h3>
                Favorites <span> Users</span>
              </h3>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {favorites.map((dev) => (
            <FavoriteDevCard
              key={dev._id}
              {...dev}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoritesUsers;
