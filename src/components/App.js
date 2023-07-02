import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilerPopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

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

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  };

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((item) => item._id !== card._id));
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const handleUpdateUser = ({ name, about }) => {
    api.updateUserInfo({ name, about })
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err)
      })
  };



  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user)
        setCards(cards);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []
  )

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAppPlaceClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          cards={cards}
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

        <EditProfilePopup isOpen={isEditProfilerPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

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

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
