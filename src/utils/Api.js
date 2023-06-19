class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /** приватный метод для проверки, все ли в порядке с ответом от сервера */
  _handleResponseValidation(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  /** публичный метод для подгрузки информации о пользователе с сервера */
  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponseValidation);
  }

  /** публичный метод для обновления информации о пользователе на сервере */
  updateUserInfo(data) {
    return fetch(this._baseUrl + '/users/me', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponseValidation);
  }

  /** публичный метод для обновления аватара пользователя на сервере */
  updateUserAvatar(data) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponseValidation);
  }

  /** публичный метод для подгрузки начального массива карточек с сервера */
  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponseValidation);
  }

  /** публичный метод для добавления новых карточек на сервер */
  addCard(data) {
    return fetch(this._baseUrl + '/cards', {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponseValidation);
  }

  /** публичный метод для удаления карточки с сервера */
  deleteCard(data) {
    return fetch(this._baseUrl + `/cards/${data._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponseValidation);
  }

  /** публичный метод для добавления лайка карточки */
  likeCard(data) {
    return fetch(this._baseUrl + `/cards/${data._id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleResponseValidation);
  }

  /** публичный метод снятия лайка карточки */
  dislikeCard(data) {
    return fetch(this._baseUrl + `/cards/${data._id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponseValidation);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: 'e463eb15-9b98-4cf4-a81a-1b59b29dbf6e',
    "Content-Type": "application/json",
  },
});

export default api;
