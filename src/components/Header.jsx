import React from 'react'
import '../assets/styles/components/Header.scss'

export const Header = () => (
  <header className="header">
    <img className="header__img" src="../assets/logo.png" alt="logo" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="../assets/user.png" alt="avatar user" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sessión</a></li>
      </ul>
    </div>
  </header>
)