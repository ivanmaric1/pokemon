import React from 'react';
import mylogo from '../img/im.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <img src={mylogo} alt="logo" className="Footer-logo" />
      <p>
        <i className="far fa-copyright"></i> Copyright 2021 Ivan M. All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;
