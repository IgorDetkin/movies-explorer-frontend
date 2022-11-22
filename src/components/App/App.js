import React, { useEffect, useState }  from 'react'; 
import { Route, Switch, Redirect, Link, useHistory } from "react-router-dom";
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




function App() {


  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className="root">
      <div className="page">
        <>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          
          <Route path="/movies">
            <Movies/>
          </Route>
          
          <Route  path="/saved-movies">
            <SavedMovies/>
          </Route>

          <Route  path="/profile">
            <Profile/>
          </Route>

          <Route  path="/signup">
            <Register/>
          </Route>

          <Route  path="/signin">
            <Login/>
          </Route>

          <Route  path="*">
            <Error/>
          </Route>
        </Switch>

        

        </>
      </div>
    </div>
  );
}

export default App;
