import React from 'react';
import { Link } from 'react-router-dom' 

import '../assets/styles/components/Login.scss'

export const Register = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia sessión</h2>
      <form className="login__container--form">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="email" placeholder="Correo" />
        <input className="input" type="password" placeholder="Password" />
        <button className="button">Registrar</button>
      </form>
      <Link to="/signin">
        Iniciar Sesión
      </Link>
    </section>
  </section>
)