import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import { Route, Switch } from "react-router-dom";
// import films from '../../utils/utils.js';

function MoviesCard(props) {

  const likeClassName = (`card__like ${props.isLiked ? 'card__like_active' : ''}`);


  function getTimeFromMins(duration) {
    let hours = Math.trunc(duration/60);
    let minutes = duration % 60;
    return hours + 'ч ' + minutes + 'м';
};



//обработчик клика по кнопке лайка
function handleLikeClick(movie) {
  // debugger;
  const {_id, ...cardBeforeLike} = movie //на момент клика по лайку 
  //у карточки не должно быть параметра _id
  props.onLike(cardBeforeLike);
  console.log(cardBeforeLike)
}

function handleDeleteClick(movie) {
  props.onDelete(movie);
}

function checkLikeClick() {
  if(props.savedPage || props.isLiked) {
    handleDeleteClick(props.card)
  }
  else {handleLikeClick(props.card)}
}




  return (
    <>
      <li className="card">
        <a className="card__img-link" href={props.card.trailerLink} target="blank"> 
          <img className="card__img" src={props.card.image} alt={props.card.nameRU}/>
        </a>
        <div className="card__name-like">
          <h2 className="card__name">{props.card.nameRU}</h2>


        <Switch>
          <Route exact path="/movies">
            <button 
              type="button"
              className={likeClassName}
              onClick={checkLikeClick}
            ></button>
          </Route>

          <Route path="/saved-movies">
            <button 
              type="button"
              className="card__delete"
              onClick={props.savedPage ? () => handleDeleteClick(props.card) : () => handleDeleteClick(props.card)}
            ></button>
          </Route>


          </Switch>
        </div>
        <p className="card__length">{getTimeFromMins(props.card.duration)}</p>
      </li>
    </>
  );
}

export default MoviesCard;





// const [isLiked, setIsLiked] = useState(false);
  // const handleLikeClick = () => {
  //   setIsLiked(!isLiked)
  // }








// function handleLikeClick() {
  //   if (!props.isLiked) {
  //       props.onCardLike(props.movie)
  //       props.movie.isLiked = true
  //       console.log('лайк поставил')
  //   } else {
  //       props.onCardDislike(props.checkId(props.movie.id)._id)
  //       props.movie.isLiked = false
  //       console.log('лайк снял')
  //   }
  //   // console.log(props.movie.isLiked)
  // }
  
  
  // function handleDeleteClick() {
  //   // console.log('удалил')
  //   props.onCardDislike(props.movie._id); //пропс из MoviesCardList
  //   props.movie.isLiked = false;
  //   console.log('удалил')
// }


