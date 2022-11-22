import React, { useEffect, useState }  from "react";
import "./SavedMovies.css";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../Preloader/Preloader.js";
import film1 from "../../images/film1.jpg";
import film2 from "../../images/film2.jpg";
import film3 from "../../images/film3.jpg";
import film4 from "../../images/film4.jpg";
import film5 from "../../images/film5.jpg";
import Navigation from "../Navigation/Navigation.js";

function SavedMovies() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // остается здесь!!!!
  const mobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  }

  const [isSliderOff, setIsSliderOff] = useState(false);
  const sliderClick = () => {
    setIsSliderOff(!isSliderOff);
  }

    return(
        <>
        <Header>
          <Navigation
            onMobileMenu={mobileMenuClick}
            isOpen={isMobileMenuOpen}
            onClose={closeMenu}
            />
        </Header>
        <SearchForm
          isClicked={isSliderOff}
          sliderSlide={sliderClick}
        />
        <MoviesCardList>
          {/* <Preloader/> */}
          <MoviesCard link={film4} name="Кил-рил" length="1ч 03м" />
          <MoviesCard link={film1} name="Слово" length="1ч 48м" />
          <MoviesCard link={film5} name="Gimme Danger: История Игги и группа The Stooges" length="1ч 03м" />
          <MoviesCard link={film2} name="100лет" length="1ч 03м" />
          <MoviesCard link={film3} name="Бэнкси" length="1ч 48м" />
          
        </MoviesCardList>
        <Footer/>
        </>
        
    )
}

export default SavedMovies;