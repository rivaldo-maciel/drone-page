import React from 'react';
import Header from '../../components/Header';
import ControlledCarousel from '../../components/ControlledCarousel';
import CardsHomeContainer from '../../components/CardsHomeContainer';
import './style.css';

function Home() {
  return (
    <>
      <Header />
      <div className='carousel-cards-content'>
        <ControlledCarousel />
        <CardsHomeContainer />
      </div>
    </>
  );
};

export default Home;