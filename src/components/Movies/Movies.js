import React, { useEffect, useState }  from "react";
import "./Movies.css";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Navigation from "../Navigation/Navigation.js";
import Preloader from "../Preloader/Preloader.js";
import film1 from "../../images/film1.jpg";
import film2 from "../../images/film2.jpg";
import film3 from "../../images/film3.jpg";
import film4 from "../../images/film4.jpg";
import film5 from "../../images/film5.jpg";
import film6 from "../../images/film6.jpg";
import film7 from "../../images/film7.jpg";
import film8 from "../../images/film8.jpg";
import film9 from "../../images/film9.jpg";
import film10 from "../../images/film10.jpg";
import film11 from "../../images/film11.jpg";
import film12 from "../../images/film12.jpg";


function Movies() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          <MoviesCard link={film1} name="Слово" length="1ч 48м" />
          <MoviesCard link={film2} name="100лет" length="1ч 03м" />
          <MoviesCard link={film3} name="Бэнкси" length="1ч 48м" />
          <MoviesCard link={film4} name="Кил-рил" length="1ч 03м" />
          <MoviesCard link={film5} name="Gimme Danger: История Игги и группа The Stooges" length="1ч 03м" />
          <MoviesCard link={film6} name="Книги" length="1ч 03м" />
          <MoviesCard link={film7} name="Мир" length="2ч 55м" />
          <MoviesCard link={film8} name="Бег" length="1ч 03м" />
          <MoviesCard link={film9} name="Апоплэапокккапокапофиу" length="1ч 03м" />
          <MoviesCard link={film10} name="Здесь был царь" length="1ч 03м" />
          <MoviesCard link={film11} name="Евонный" length="1ч 03м" />
          <MoviesCard link={film12} name="Выжить ценой жизни" length="1ч 03м" />
          </MoviesCardList>
          <Footer/>
        </>
        
    )
}

export default Movies;