import React from "react";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) { 
    const currentUser = React.useContext(CurrentUserContext);

    return(
        <>
        <Header
        loggedIn={props.loggedIn}
        />
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
        <Footer/>
        </>    
    )
}

export default Main;