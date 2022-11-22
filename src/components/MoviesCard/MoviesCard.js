import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import { Link, Route, Switch, useLocation } from "react-router-dom";
// import films from '../../utils/utils.js';

function MoviesCard(props) {

  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setIsLiked(!isLiked)
  }

  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active' : 'card__like'}`
  ); 


  return (
    <>
      <li className="card">
        <img className="card__img" src={props.link} alt={props.name} />
        <div className="card__name-like">
          <h2 className="card__name">{props.name}</h2>


        <Switch>
          <Route exact path="/movies">
            <button 
              type="button"
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}  
            ></button>
          </Route>

          <Route path="/saved-movies">
            <button 
            type="button"
            className="card__delete"></button>
          </Route>


          </Switch>
        </div>
        <p className="card__length">{props.length}</p>
      </li>
    </>
  );
}

export default MoviesCard;


