import React from "react";
import "./SearchForm.css";
import find from "../../images/lupa.svg";

function SearchForm(props) {

    const sliderClassName = (
        `searchForm__slider ${props.isClicked ? 'searchForm__slider' : 'searchForm__slider_deactive'}`
      ); 

    return(
        <section className="searchForm">
            <div className="searchForm__line">
                <div className="searchForm__container">
                    <form className="searchForm__form">
                        <label className="searchForm__form-field">
                            <img className="searchForm__img-find" src={find} alt="поле для поиска"/>
                            <input
                                name="movie"
                                id="film"
                                type="text"
                                placeholder="Фильм"
                                // value="" 
                                // onChange={handleChangeName}
                                className="searchForm__movie-input"
                                required
                                minLength="2"
                                maxLength="50"
                            />
                        </label>


                        <div className="searchForm__find-slider">
                        <button className="searchForm__button-find" type="button"></button>
                        <div className="searchForm__slider-container">
                            <button 
                            type="button"
                            className={sliderClassName}
                            onClick={props.sliderSlide}
                            ></button>
                            <p className="searchForm__slider-text">Короткометражки</p>
                        </div>
                    </div> 

                    </form>

                    {/* <div className="searchForm__find-slider">
                        <button className="searchForm__button-find" type="button"></button>
                        <div className="searchForm__slider-container">
                            <button className="searchForm__slider"></button>
                            <p className="searchForm__slider-text">Короткометражки</p>
                        </div>
                    </div>     */}
                </div>
            </div>    
        </section>
    )
}

export default SearchForm;