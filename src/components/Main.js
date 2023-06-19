import React from 'react';


function Main({ onEditAvatar, onEditProfile, onAddPlace }) {



  return (
    <main className="content">
      <section className="profile">

        <button
          className="profile__image-edit-button"
          type="button"
          onClick={onEditAvatar}>
          <img
            className="profile__image"
            src="#"
            alt="Аватар пользователя."
            name="avatar"
          />
        </button>

        <h1 className="profile__title" name="name">
          Жак-Ив Кусто
        </h1>

        <p className="profile__subtitle" name="about">
          Исследователь океана
        </p>

        <button
          type="button"
          className="profile__edit-button"
          aria-label="Изменить профиль."
          onClick={onEditProfile}
        />

        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить место."
          onClick={onAddPlace}
        />

      </section>
      <section className="places" aria-label="Блок с карточками мест" />
    </main>
  )
}

export default Main
