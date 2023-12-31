import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const avatarRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="new-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      btnText="Сохранить">
      <input
        name="avatar"
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_description"
        required
        id="input-avatar"
        ref={avatarRef}
      />
      <span className="popup__input-error input-avatar-error">
        Вы пропустили это поле
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup
