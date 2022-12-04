import React, { useEffect, useState }  from 'react'; 
import { Route, Switch, Redirect, Link, useHistory, useLocation } from "react-router-dom";
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import Error from '../Error/Error.js'
import ProtectedRoute from "../ProtectdRoute/ProtectedRoute.js";
import newApi from '../../utils/MainApi';
import * as auth from "../../utils/Auth.js";
import CurrentUserContext from "../contexts/CurrentUserContext";




function App() {

  const history = useHistory();
  const location = useLocation()


//вход
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isResultRequest, setIsResultRequest] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      //проверка чтобы запросы не выполнялись, когда пользователь не вошел
      
      newApi
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res.data);    
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [loggedIn]);


  function handleUpdateUser(data) {
    newApi
      .editUserProfile(data)
      .then((res) => {
        setCurrentUser(res.data);
        // closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }



  function tokenCheck() {
    const jwt = localStorage.getItem("jwt"); //объявляем переменную в которой получаем данные
    if (jwt) {
      // если есть токен, то
      auth
        .getInfo(jwt) //сделай запрос на получение данных
        .then((res) => {
          // тогда получаем объект data, который res, в котором есть _id и email
          if (res) {
            // если есть эта data
            // console.log(res)
            setLoggedIn(true); // то тогда пропускаем пользователя
            history.push(location.pathname); // если тут будет конкретный адрес, то тогда страница error сама будет перезагружаться 
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }



  useEffect(() => {
    const jwt = localStorage.getItem("jwt"); //объявляем переменную в которой получаем данные
    if (jwt) {
      // если есть токен, то
      tokenCheck(jwt); //вызываем функцию с аргументом в виде токена
    }
  }, []);




  function handleRegister({name, email, password }) {
    return auth
      .register({name, email, password }) //из auth.js
      .then(() => {
        setIsResultRequest(true);
        // setLoggedIn(true);
        localStorage.clear();
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
        setIsResultRequest(false);
      });
  }



  function handleLogin({ email, password }) {
    return auth
      .authorize({ email, password })
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token); //сохранение данных
          history.push('/movies');
          // setEmail(email);
          newApi.getUserInfo() 
            .then((res) => {
              setCurrentUser(res.data);
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        // setIsSignYesPopupOpen(true);
        setIsResultRequest(false);
      });
  }


  function handleSignOut() {
    localStorage.clear(); //удалить токен
    setLoggedIn(false);
    setCurrentUser({});
    console.log("вышел")
    history.push("/");
  }


  //вход кончился






  
  // const moviesDataArray = Array.prototype.slice(moviesData, 0)
  // const [start, setLoggedIn] = useState(false);

  useEffect(() => {
    // debugger;
    if (loggedIn) {
      newApi.getSavedCards()
        .then(
          (movies) => {
          setSavedMovies(movies.data);
          localStorage.setItem('savedMovies', JSON.stringify(movies))
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn])


  

// обработчик добавления фильма в избранное(сохранение в базе MainApi)
  function handleSaveMovie(movie){
    newApi.likeMovie(movie)
      .then((newCard) => {
        setSavedMovies([newCard.data, ...savedMovies]); 
        console.log(newCard) //вот тут уже появляется _id карточки
      })
      .catch((err) => {
        console.log(err)
      })
  }


  function handleDeleteMovie(movie){
    newApi.deleteCard(movie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter((item) => item._id === movie._id ? false : true); // фильтруем сохраненки
        setSavedMovies(newMoviesList); // получаем новый список сохраненок
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies)); //сохранить обновленный список
      })
      .catch(err => {
        console.log(err)
      })
  };






  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <>
          <Switch>
            
            <Route exact path="/">
              <Main
              loggedIn={loggedIn}
              />
            </Route>

            <ProtectedRoute 
              path="/movies"
              loggedIn={loggedIn}

              component={Movies} 
              savedMoviesList={savedMovies}
              onLikeClick={handleSaveMovie}
              onDeleteClick={handleDeleteMovie}
              // movies={movies}
              />
            
            <ProtectedRoute  
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              
              savedMoviesList={savedMovies}
              onDeleteClick={handleDeleteMovie}
              // savedMovies={savedMovies}
              />

            <ProtectedRoute  
              path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUser}
              onClick={handleSignOut}
              />

            <Route  path="/signup">
              <Register onRegister={handleRegister}/>
            </Route>

            <Route  path="/signin">
              <Login onLogin={handleLogin}/>
            </Route>

            <Route path="*">
              <Error
              // loggedIn={loggedIn}
              />
            </Route>

            
          </Switch>

          </>
        </div>
      </div>
    </CurrentUserContext.Provider>  
  );
}

export default App;
