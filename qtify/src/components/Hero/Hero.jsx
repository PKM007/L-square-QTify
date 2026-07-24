import React from 'react';
import styles from './Hero.module.css';
import HeroImage from '../../assets/hero-headphones.png'; // Exported headphone image

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={HeroImage}
          width={212}
          alt="Headphones"
        />
      </div>
    </div>
  );
}

export default Hero;