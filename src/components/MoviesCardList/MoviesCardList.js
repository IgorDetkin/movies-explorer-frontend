import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Movies from "../Movies/Movies.js";

function MoviesCardList(props) {
  
  const cardListButtonMoreStatus = `cardList_button-more ${
    props.children.length >= 12
      ? "cardList_button-more"
      : "cardList_button-more_hidden"
  }`;

  return (
    <section className="cardList">
      <div className="cardList__container">
        <ul className="cardList__grid-container">
          {props.children}
        </ul>
        <button className={cardListButtonMoreStatus}>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
