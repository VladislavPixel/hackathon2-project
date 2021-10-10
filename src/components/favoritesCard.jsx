
import React from 'react';
import "../style/favorites.css";
import Button from "./button";

 const FavoritesCard = () => {
    return (
      //  {users.map((user)=>
         
      //    )}
      <div className="col-12 col-sm-6 col-lg-3">
          <div className="single_advisor_profile wow fadeInUp" dataWowDelay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
            <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
            </div>
            <div className="single_advisor_details_info">
              <h1>Максим Онофрийчук</h1>
              <h2 className="age">Возраст: 25</h2>
              <p>Мастер своего дела<br/> Командный игрок<br/> Разбираюсь в технологии от А до Я</p>
              <br/>
              <p className="designation"><span className="badge bg-secondary">Frontend разработчик</span></p>
              <Button color = 'danger' nameBtn = "Удалить" typeForm="remove"/>
            </div>
          </div>
        </div>
    );
 }
  
 export default FavoritesCard;

 