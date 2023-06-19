import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilerPopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  };

  const handleAppPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  };

  const handleCardClick = (card) => {
    setSelectedCard(card)
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">

      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAppPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="new-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        btnText="Сохранить">
        <input
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_description"
          required=""
          id="input-avatar"
        />
        <span className="popup__input-error input-avatar-error">
          Вы пропустили это поле
        </span>
      </PopupWithForm>

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilerPopupOpen}
        onClose={closeAllPopups}
        btnText="Сохранить">
        <input
          name="name"
          type="text"
          placeholder="Введите имя"
          className="popup__input popup__input_type_name"
          required=""
          minLength={2}
          maxLength={40}
          id="input-name"
        />
        <span className="popup__input-error input-name-error">
          Вы пропустили это поле
        </span>
        <input
          name="about"
          type="text"
          placeholder="Введите профессию"
          className="popup__input popup__input_type_description"
          required=""
          minLength={2}
          maxLength={200}
          id="input-description"
        />
        <span className="popup__input-error input-description-error">
          Вы пропустили это поле
        </span>
      </PopupWithForm>

      <PopupWithForm
        name="new-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        btnText="Создать">
        <input
          name="name"
          type="text"
          placeholder="Название"
          className="popup__input popup__input_type_name"
          required=""
          minLength={2}
          maxLength={30}
          id="input-place"
        />
        <span className="popup__input-error input-place-error">
          Вы пропустили это поле
        </span>
        <input
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_description"
          required=""
          id="input-url"
        />
        <span className="popup__input-error input-url-error">
          Вы пропустили это поле
        </span>
      </PopupWithForm>

      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        /* isOpen={} */
        onClose={closeAllPopups}
        btnText="Да">
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
