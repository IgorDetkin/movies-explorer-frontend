import React, { useEffect, useState }  from "react";
import { Link, Route } from "react-router-dom";
import './Header.css';
import logo from "../../images/logo.svg";
import Navigation from '../Navigation/Navigation.js';

function Header(props) {

    // const [loggedIn, setLoggedIn] = useState(true);




    
    return(
        <header className="header">
            <div className="header__container">
                
                <Link to="/">
                    <img className="header__logo" src={logo} alt='логотип'/>
                </Link>

                <div className="header__buttons">


                    <Route exact path="/">
                        <Link to ="/signup">
                            <button className="header__button-reg" type="button">Регистрация</button>  
                        </Link>

                        <Link to="signin">
                        <button className="header__button-login" type="button">Войти</button>
                        </Link>
                    </Route>   

                    {/* <Route path="/movies">
                        <Navigation/> 
                    </Route>  */}
                    {props.children}


                </div>
            </div>
        </header>
    )
}

export default Header;






                                        {/* {loggedIn
                    ?
                    <Route path="/">
                        <Link to ="/signup">
                            <button className="header__button-reg" type="button">Регистрация</button>  
                        </Link>

                        <Link to="signin">
                        <button className="header__button-login" type="button">Войти</button>
                        </Link>
                    </Route>   
                    :
                    <Navigation/>
                    } */}