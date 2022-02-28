import React from 'react';
import { Image } from './style.js';
import './style.css';
import Stars from '../../assets/stars.png' ;

function CardDrone({ src, title, price }) {
  return (
    <div className="card-product-container">
      <div className="image-product-container">
        <Image src={ src } alt="drone" />
      </div>
      <img src={Stars} alt="estrelas" className="stars"/>
      <div className="infos-product">
        <h3>{title}</h3>
        <div className="price-button-container">
          <p>{price}</p>
          <button>Comprar</button>
        </div>
      </div>   
    </div>
  );
}

export default CardDrone;