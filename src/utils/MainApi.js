class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }




  
    //Загрузка информации о пользователе с сервера
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: {   
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        },
      }).then(this._checkResponse);
    }
  
  
    editUserProfile(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: {   
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
          email: data.email,  
          name: data.name,
        }),
      }).then(this._checkResponse);
    }


    getSavedCards() {
        return fetch(`${this._baseUrl}/movies`, {
          headers: {   
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
            "Content-Type": "application/json",
          },
          method: 'GET',
        }).then(this._checkResponse);
      }

  
    likeMovie(movie) {
      return fetch(`${this._baseUrl}/movies`, {
        headers: {   
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify( 
          movie
            // country: movie.country,
            // director: movie.director,
            // duration: movie.duration,
            // year: movie.year,
            // description: movie.description,
            // image: movie.image, //внимание
            // trailerLink: movie.trailerLink,
            // nameRU: movie.nameRU,
            // nameEN: movie.nameEN,
            // thumbnail: `https://api.nomoreparties.co/${movie.thumbnail}`, //внимание
            // movieId: movie.id,  // внимание
        ),
      }).then(this._checkResponse);
    }
  
    deleteCard(movieId) {
      return fetch(`${this._baseUrl}/movies/${movieId}`, {
        headers: {   
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then(this._checkResponse);
    }
  
  }
  
  const newApi = new Api({
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://api.beatfilm.learnproject.nomoredomains.icu",
    headers: {   
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    },
  });
  
  export default newApi;
  
  //после форматирования
  