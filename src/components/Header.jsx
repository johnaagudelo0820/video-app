import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo.png'
import avatar from '../assets/static/user.png'

export const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="logo" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={avatar} alt="avatar user" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to="/signin">Inisiar sesión</Link></li>
        <li><a href="/">Cerrar Sessión</a></li>
      </ul>
    </div>
  </header>
)