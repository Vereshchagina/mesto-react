import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__image-container">
        <img className="popup__image" src="#" alt="Фотография." />
        <p className="popup__image-title" />
        <button
          type="button"
          className="popup__close-button popup__image-close"
          aria-label="Закрыть окно."
        />
      </div>
    </div>
  )
}

export default ImagePopup
