import React from 'react'
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo.png'
import avatar from '../assets/static/user.png'

export const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="logo" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={avatar} alt="avatar user" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sessión</a></li>
      </ul>
    </div>
  </header>
)