class MoviesApi {
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

      getInitialCards() {
        return fetch(`${this._baseUrl}`, {
          headers: this._headers,
        }).then(this._checkResponse);
      }














}

const newMoviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
    //   authorization: "12ba528d-ad1d-413e-9351-d51fd8b2894d",
      "Content-Type": "application/json",
    },
  });
  
  export default newMoviesApi;

