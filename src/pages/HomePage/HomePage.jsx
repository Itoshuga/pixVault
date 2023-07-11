import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import logo from '../../assets/react.svg';

const HomePage = () => {
  return (
      <>
        <section id="hero">
            <h4>Galerie d'Image</h4>
            <h2>Publication et</h2>
            <h1>Partage d'Image</h1>
            <p>PixVault vous permet de publier des images dans des collections.</p>
            <Link to="/">Publier</Link>
        </section>

        <section id="tag" className="section-p1">
          <div className="tag-box">
            <img src={logo} alt="" />
            <h6>Cosplay</h6>
          </div>
          <div className="tag-box">
            <img src={logo} alt="" />
            <h6>Anime</h6>
          </div>   
          <div className="tag-box">
            <img src={logo} alt="" />
            <h6>Game</h6>
          </div>   
          <div className="tag-box">
            <img src={logo} alt="" />
            <h6>Artist</h6>
          </div>   
          <div className="tag-box">
            <img src={logo} alt="" />
            <h6>Other</h6>
          </div>   
        </section>
      </>
  );
};

export default HomePage;