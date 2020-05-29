import React from 'react'

import google from '../assets/static/google-icon.webp'
import twitter from '../assets/static/twitter-icon.webp'

import '../assets/styles/components/Login.scss'

export const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia sessión</h2>
      <form className="login__container--form">
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Password" />
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" name="" id="cbox1" value="checkbox" />Recuérdame
          </label>
          <a href="">Olvidé mi contreaseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div><img src={google} alt="Google" />Inicia sesión con Google</div>
        <div><img src={twitter} alt="Twitter" />Inicia sesión con Twitter</div>
      </section>
      <p className="login__container--register">
        No tienes ninguna cuenta <a href="">Regístrate</a>
      </p>
    </section>
  </section>
)

