
export const baseUrl = "https://api.beatfilm.learnproject.nomoredomains.icu";
// export const baseUrl = 'http://localhost:3000';


function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({name, email, password}) => {
    return fetch(`${baseUrl}/signup`, {
      // credentials:'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password })
    })
    .then((res) => checkResponse(res));
  };


export const authorize = ({email, password}) => {
    return fetch(`${baseUrl}/signin`, {
      // credentials:'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        email, password
         })
    })
    .then((res) => checkResponse(res));
  };



  export function getInfo () {
    const token = localStorage.getItem('jwt');
        return fetch(`${baseUrl}/users/me`, {
          method: 'GET',
          headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        })
        .then((res) => checkResponse(res));
  }
