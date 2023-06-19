import React from 'react';

function Card({ card, onCardClick }) {

  function handleCardClick() {
    onCardClick(card)
  }


  return (
    <article className="place">
      <img className="place__image" src={card.link} alt={card.name} onClick={handleCardClick} />
      <button type="button" className="place__delete" aria-label="Удалить." />
      <div className="place__content">
        <h2 className="place__text">{card.name}</h2>
        <div className="place__likes">
          <button type="button" className="place__like" aria-label="Нравится." />
          <span className="place__counter">{card.likes.length}</span>
        </div>
      </div>
    </article>

  )
}

export default Card
