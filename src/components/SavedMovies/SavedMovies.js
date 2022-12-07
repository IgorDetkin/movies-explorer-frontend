import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Navigation from "../Navigation/Navigation.js";

function SavedMovies(props) {
  /* eslint-disable no-unused-vars */
  /* eslint-disable react-hooks/exhaustive-deps */

  const CheckboxStateStart =
    localStorage.getItem("shortSavedMovies") === "on" ? "on" : "off";

  const [reqSearch, setreqSearch] = useState("");
  const [shortMovies, setShortMovies] = useState(CheckboxStateStart);

  const [filteredMovies, setFilteredMovies] = useState(props.savedMoviesList);

  const [isEmptyFound, setIsEmptyFound] = useState(false);

  // ф-ия фильтрации фильмов по поиску и длине
  function filterMovies(movies, reqSearch, shortMovies) {
    const requistedMovies = movies.filter((item) =>
      item.nameRU.toLowerCase().includes(reqSearch.toLowerCase())
    );

    if (shortMovies === "on") {
      return filterShortMovies(requistedMovies);
    }
    return requistedMovies;
  }

  function filterShortMovies(movies) {
    return movies.filter((item) => item.duration < 40);
  }

  // обработчик отправки формы
  function handleSubmit(value) {
    setreqSearch(value);
    const resultList = filterMovies(
      props.savedMoviesList,
      reqSearch,
      shortMovies
    );
    setFilteredMovies(resultList);
  }

  // обработчик клика по радиокнопке
  function handleShortMovies(event) {
    setShortMovies(event.target.value);
    localStorage.setItem("shortSavedMovies", event.target.value);
  }

  // function checkEmptySearch(arr) {
  //   arr.length === 0
  //     ? setIsEmptyFound(true)
  //     : setIsEmptyFound(false);
  // }

  useEffect(() => {
    const arr = filterMovies(props.savedMoviesList, reqSearch, shortMovies);
    setFilteredMovies(arr);
    if (reqSearch) {
      arr.length === 0 ? setIsEmptyFound(true) : setIsEmptyFound(false);
    }
  }, [reqSearch, shortMovies, props.savedMoviesList]);

  return (
    <>
      <Header loggedIn={props.loggedIn}>
        <Navigation />
      </Header>
      <SearchForm
        onSearchClick={handleSubmit}
        onCheckbox={handleShortMovies}
        shortMovies={shortMovies}
        savedMoviesPage={true}
      />
      <MoviesCardList
        moviesArray={filteredMovies}
        savedMoviesPage={true}
        isEmptyList={isEmptyFound}
        onDelete={props.onDeleteClick}
        savedMovies={props.savedMoviesList}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;

//useEffect(() => {
// }, []);

//Старый способ

// function handleSubmit(e) {
//     e.preventDefault();
//     // props.setIsLoading(true);
//     props.isSearch ? searchFromMovies() : setIsErr(true);
// }

// function handleChangeMovie() {
//ectedIsMovie(!isSelectedMovie)
// }

// const seeMovies = props.savedMovies;

// function handleOnChange(e) {
//     props.setIsSearch(e.target.value)

// }
