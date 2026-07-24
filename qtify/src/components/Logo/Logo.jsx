import React from 'react';
import LogoImage from '../../assets/logo.png'; // Ensure logo.png is inside src/assets/

function Logo() {
  return <img src={LogoImage} alt="QTify Logo" width={67} />;
}

export default Logo;