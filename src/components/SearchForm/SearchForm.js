import React, { useEffect, useState, useCallback }   from "react";
import "./SearchForm.css";
import find from "../../images/lupa.svg";
import useValidation from '../../utils/validation';

function SearchForm({onSearchClick, savedMoviesPage, shortMovies, onCheckbox}) {
  
    const {values, isValid, errors, setValues, setIsValid, handleChange} = useValidation();

    // const { req } = errors;

    const errorValidClassName = (`searchForm__error ${isValid ? '' : 'searchForm__error_active'}`);
  

    
    const validFormSearch = () => {
      setIsValid(!isValid);
    };
    
    

    function handleSubmit(event) {
        // debugger;
        event.preventDefault();
        onSearchClick(values.req);
      }


      useEffect(() => {
        if (!savedMoviesPage) {
          const input = localStorage.getItem('reqSearch');
          if (input) {
            setValues({req : input});
            setIsValid(true);
          }
        }
      }, [savedMoviesPage, setValues, setIsValid]);


      const submitButtonClassName = (`searchForm__button-find ${isValid ? 'searchForm__button-find' : 'searchForm__button-find_deactive'}`);

      const sliderClassName = (`searchForm__slider ${shortMovies === 'on' ? 'searchForm__slider' : 'searchForm__slider_deactive'}`);

    return(
        <section className="searchForm">
            <div className="searchForm__line">
                <div className="searchForm__container">
                    <form className="searchForm__form"
                    onSubmit={handleSubmit}
                    >
                        <label className="searchForm__form-field">
                            
                            <img className="searchForm__img-find" src={find} alt="поле для поиска"/>
                            <input
                                name='req'
                                id="film"
                                type="text"
                                placeholder="Фильм"
                                value={values.req || ""}
                                onChange={handleChange}
                                className="searchForm__movie-input"
                                required
                                minLength="1"
                                maxLength="50"
                                autoComplete="off"
                            />
                            <span 
                                className={errorValidClassName} 
                                onChange={validFormSearch}
                                >{errors.req ? 'Введите ключевое слово' : ''}
                            </span>
                        </label>

                        <div className="searchForm__find-slider">
                            <button 
                                className={submitButtonClassName}
                                type="submit"  
                                disabled={!isValid}   
                            ></button>
                            <div className="searchForm__slider-container">
                                <div className={sliderClassName}>
                                    <input
                                    className='searchForm__slider_input'
                                    type="radio"
                                    name="shortMovies"
                                    value="off"
                                    checked={shortMovies === "off" ? true : false}
                                    onChange={onCheckbox}
                                    />

                                    <input
                                    className='searchForm__slider_input'
                                    type="radio"
                                    name="shortMovies"
                                    value="on"
                                    checked={shortMovies === "on" ? true : false}
                                    onChange={onCheckbox}
                                    />
                                </div>
                                <p className="searchForm__slider-text">Короткометражки</p>
                            </div>
                        </div> 
                    </form>
                
                </div>
                
            </div>    
        </section>
    )
}

export default SearchForm;