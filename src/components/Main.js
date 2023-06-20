import React from 'react';
import api from '../utils/Api';
import Card from './Card';


function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardDelete }) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []
  )

  return (
    <main className="content">

      <section className="profile">

        <button
          className="profile__image-edit-button"
          type="button"
          onClick={onEditAvatar}>
          <img
            className="profile__image"
            src={userAvatar}
            alt="Аватар пользователя."
            name="avatar"
          />
        </button>

        <h1 className="profile__title" name="name">
          {userName}
        </h1>

        <p className="profile__subtitle" name="about">
          {userDescription}
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

      <section className="places" aria-label="Блок с карточками мест">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
            />
          )
        }
        )}
      </section>
    </main>
  )
}

export default Main
