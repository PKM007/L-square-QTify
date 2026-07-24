import React from 'react';
import LogoImage from '../../assets/logo.png';

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={LogoImage} alt="QTify Logo" width={67} />
    </div>
  );
}

export default Logo;