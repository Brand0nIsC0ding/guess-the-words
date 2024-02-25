// Header.js
import React from 'react'
import "../styles/Header.css"

function Header( { title } ) {
    return(
        <header className="header">
      <div className="header__content">
        <h1 className="header__title">{title}</h1>
        <div className="header__scroll-text">
          <span>"Tu peut essayer jouer ce e jeu, il est purement openSource !!!"</span>
          <span>"Tu attends quoi pour commencer a m'aider a ameliorer ce jeux 😀 ???"</span><br/>
          <span>"Fais toi plaisir sur le lien de mon Repository Github😀 ???</span> 
        </div>
      </div>
    </header>
    );
}

export default Header;