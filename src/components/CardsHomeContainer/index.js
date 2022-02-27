import React from 'react';
import './style.css';
import data from '../../data';
import CardHome from '../CardHome';

function CardsHomeContainer() {
  const {cardsHome} = data;
  return (
    <div className='cards-home-container'>
      {
        cardsHome.map((card) => (
          <CardHome
            src={ card.src }
            title={ card.title }
            text={ card.text }
            key={ card.id }
          />
        ))
      }
    </div>
  );
}

export default CardsHomeContainer;