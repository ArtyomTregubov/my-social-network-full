export const BASE_URL = 'https://api.nomoreparties.co';

export const register = (password: string, email: string) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const authorize = (identifier: string, password: string) => {
  return fetch(`${BASE_URL}/auth/local`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.jwt) {
        localStorage.setItem('jwt', data.jwt);

        return data;
      }
    })
    .catch((err) => console.log(err));
};
