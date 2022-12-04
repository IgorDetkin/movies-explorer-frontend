import React, { useEffect, useState }  from "react";
import "./Movies.css";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import newMoviesApi from '../../utils/MoviesApi';


function Movies(props) {


// ф-ия фильтрации фильмов по поиску и длине
function filterMovies(movies, reqSearch, shortMovies) {
    const requistedMovies = movies.filter((item) => 
      item.nameRU.toLowerCase().includes(reqSearch.toLowerCase()));
  
  if(shortMovies === 'on'){
    return filterShortMovies(requistedMovies) 
  }
 
  return requistedMovies;
}

function filterShortMovies(movies){
  return movies.filter((item) => item.duration < 40);
}
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */




  const isSearch = JSON.parse(localStorage.getItem('searchedMovies'));
  const existingRequest = localStorage.getItem('reqSearch')

  const CheckboxStateStart = localStorage.getItem('shortMovies') === 'on' ? 'on' : 'off';
  const [shortMovies, setShortMovies] = useState(CheckboxStateStart);
  const [reqSearch, setreqSearch] = useState(existingRequest ? existingRequest : '');


  const [filteredMovies, setFilteredMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState([]);
  const [isSavedsearchedMovie, setisSavedsearchedMovie] = useState(isSearch? true: false);
  const [searchedMovies, setSearchedMovies] = useState(isSearch?.length ? isSearch : []) // ВОПРОС ЗНАК ОБЯЗАТЕЛЬНО!!!!!!

  const [isEmptyFound, setIsEmptyFound] = useState(false); //поиск пуст или нет
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);



  function selectShortMovie (arr) {
    setFilteredMovies(shortMovies === 'on' ? filterShortMovies(arr) : arr); 
    // console.log(arr, filteredMovies)
  }



// ПОТОМ

  function handleSetFilteredMovies (movies, request) {
    const requestedMoviesList = filterMovies(movies, request, "off"); // все фильмы по запросу, состояние чекбокса
    selectShortMovie(requestedMoviesList)
    localStorage.setItem('searchedMovies', JSON.stringify(requestedMoviesList));
  }


// сабмит поиска
function handleSubmit(value) {
    // debugger;
    setIsMoviesLoading(true);
    setreqSearch(value);
    localStorage.setItem('reqSearch', value);

    if (!initialMovies.length) {
      // console.log("handleSubmit попал в if, значит стейт пуст")
      newMoviesApi.getInitialCards()
        .then((data) => {
          // debugger;
          setInitialMovies(data);
          setisSavedsearchedMovie(false)
          localStorage.setItem('initialMovies', JSON.stringify(data)); 
          handleSetFilteredMovies(data, value);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsMoviesLoading(false))
    }
    
    
    else {
      // console.log("handleSubmit попал в else, стейт с данными")
      handleSetFilteredMovies(initialMovies, value);
      setIsMoviesLoading(false);
    }
    
  }

   // обработка и проверка если поиск пуст
 function checkEmptySearch(arr) {
  arr.length === 0 
    ? setIsEmptyFound(true) 
    : setIsEmptyFound(false);
}

  // клик по чекбоксу
  function handleShortMovies(event) {
    console.log(event)
    setShortMovies(event.target.value);
    localStorage.setItem('shortMovies', event.target.value);
	}


 // при новом поиске фильтруем фильмы.
 useEffect(() => {
  if (reqSearch && initialMovies && !isSavedsearchedMovie) {
    const arr = filterMovies(initialMovies, reqSearch, shortMovies);
    selectShortMovie(arr)
    checkEmptySearch(arr);
    // console.log(arr)
  }
  if (isSavedsearchedMovie) {
    const arr = filterMovies(searchedMovies, reqSearch, shortMovies);
    selectShortMovie(arr)
    checkEmptySearch(arr)
    // console.log(arr)
  }
}, [reqSearch, initialMovies, shortMovies, ]) 




    return(
        <>
        <Header 
          loggedIn={props.loggedIn}
        />
        
        <SearchForm
          onSearchClick={handleSubmit}
          onCheckbox={handleShortMovies}
          shortMovies={shortMovies}
          savedMoviesPage={false}
          setIsEmptyFound={setIsEmptyFound}
        />
        <MoviesCardList
          isLoading={isMoviesLoading}
          savedMoviesPage={false}
          moviesArray={filteredMovies}
          isEmptyList={isEmptyFound}
          onLike={props.onLikeClick}
          onDelete={props.onDeleteClick}
          savedMovies={props.savedMoviesList}
        /> 

          <Footer/>
        </>
        
    )
}

export default Movies;

