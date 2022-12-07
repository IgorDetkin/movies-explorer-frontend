import React, { useEffect, useState }  from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Movies from "../Movies/Movies.js";
import Preloader from "../Preloader/Preloader.js";
import useScreenSize from "../../utils/WindowSize";

function MoviesCardList({isLoading, moviesArray, isEmptyList, onLike, onDelete, savedMovies, savedMoviesPage}) {
  /* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */


  const [showFilmList, setShowFilmList] = useState([]);
  const [filmsShowCount, setFilmsShowCount] = useState({sum: 0, more: 0});
  
  const screenWidth = useScreenSize(); 



//размеры
useEffect(() => {
if (screenWidth > 1280){
  setFilmsShowCount({sum: 12, more: 3});

} else if(screenWidth >= 1024){
  setFilmsShowCount({ sum: 8, more: 2});

} else if (screenWidth >= 768){
  setFilmsShowCount({sum: 8, more: 2});

} else if (screenWidth >= 320){
  setFilmsShowCount({sum: 5, more: 2});
}
}, [screenWidth]);




// фильтрация в зависимости от screenWidth
useEffect(() => {
// debugger;
  if(moviesArray.length && !savedMoviesPage){ // если(есть длинна массива и мы не на странице сохраненок)
    const res = moviesArray.filter((item, index) => index < filmsShowCount.sum);
    setShowFilmList(res);
    console.log(moviesArray)
  }
  
}, [moviesArray, savedMoviesPage, filmsShowCount.sum]);




  // ф-ия получения сохраненной карточки фильма
  function getSavedMovieCard(arr, id) {
    return arr.find((item) => {
      return item.movieId === id;
    });
  }

    // клик по кнопке "Еще"
    function handleClickMoreMovies () {
      const hiddenMovies = moviesArray.length - showFilmList.length;
  
      if(hiddenMovies > 0){
        const newCards = moviesArray.slice(showFilmList.length, (showFilmList.length + filmsShowCount.more));
        setShowFilmList([...showFilmList, ...newCards]);
      }
    }

    
  const cardListButtonMoreStatus = `cardList__button-more ${
    savedMoviesPage || showFilmList.length === moviesArray.length //если мы на странице сохраненок 
    //или длина показываемого массива равна длине массива найденных фильмов.
        ? "cardList__button-more_hidden"
        : "cardList__button-more"
    }`;
  

  return (
    <section className="cardList">
      <div className="cardList__container">

      {
       <>
            <ul className="cardList__grid-container">
              {isLoading 
              
                ? <Preloader/> 
                
                : (savedMoviesPage 
                    
                    ? (moviesArray.map((data) => ( //создание массива сохраненны фильмов
                          <MoviesCard
                            key={data._id} 
                            card={data} 
                            savedPage={savedMoviesPage}
                            onDelete={onDelete}
                          />
                          ))
                      )


                    : (showFilmList.length === 0 || isEmptyList 
                        
                        ? <h2 className="cardList__text-error">{isEmptyList ? 'Ничего не найдено' : ''}</h2> 
                        
                        : ( showFilmList.map((data) => { // создания массива стандартных карточек
                              const isCardSaved = getSavedMovieCard(savedMovies, data.id);
                              // получаеm _id карточки, но зануляем его далее, 
                              //пока не пройдет функция лайка, внутри которой происходит запрос
                              //добавления карточки в сохраненки. На этом этапе появляется 
                              // настоящий _id 
                              const savedCardId = (isCardSaved ? isCardSaved._id : null);
                              return (
                                <MoviesCard
                                  card={{
                                    country: data.country,
                                    director: data.director,
                                    duration: data.duration,
                                    year: data.year,
                                    description: data.description,
                                    image: `https://api.nomoreparties.co${data.image.url}`,
                                    trailerLink: data.trailerLink,
                                    nameRU: data.nameRU,
                                    nameEN: data.nameEN,
                                    // image: data.image,
                                    thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                                    movieId: data.id,
                                    _id: savedCardId,
                                  }}
                                  key={data.id}
                                  isLiked={isCardSaved ? true : false}
                                  onLike={onLike}
                                  onDelete={onDelete}
                                  savedPage={savedMoviesPage}
                                />)
                            })
                          )

                      )
                  
                  )

              }

            </ul>

            {showFilmList.length === 0 || isEmptyList
              ? ''
              : <button className={cardListButtonMoreStatus} onClick={handleClickMoreMovies} type="button">Ещё</button>
            }
          </>
        }
      </div>
    </section>
  );
}

export default MoviesCardList;


{/* <h2 className="cardList__text-error">'Ничего не найдено'</h2> */}



// const cardListButtonMoreStatus = `cardList_button-more ${
  //   MoviesCard.length >= 12
  //     ? "cardList__button-more"
  //     : "cardList__button-more_hidden"
  // }`;


// добавление информационных сообщений на странице сохраенных фильмов
  // ( moviesArray.length === 0 || isEmptyList 

  //   ? <h2 className="cardList__text-error">{isEmptyList ? 'Ничего не найдено' : 'Добавьте фильм в избранное'}</h2> 

  //   : ( moviesArray.map((data) => ( //создание массива сохраненны фильмов
  //     <MoviesCard
  //       key={data._id} 
  //       card={data} 
  //       savedPage={savedMoviesPage}
  //       onDelete={onDelete}
  //     />
  //     ))
  //     )
  // )

 






