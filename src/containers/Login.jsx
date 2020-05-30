import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginRequest } from '../actions'
import google from '../assets/static/google-icon.webp'
import twitter from '../assets/static/twitter-icon.webp'
import '../assets/styles/components/Login.scss'

const Login = ({ loginRequest, ...props }) => {
  const [form, setValues] = useState({
    email: '',
  })

  const handlerInput = event => {
    const { name, value } = event.target
    setValues({
      ...form,
      [name]: value,
    })
  }

  const hanlderSubmit = event => {
    event.preventDefault()
    console.log(form)
    loginRequest(form)
    props.history.push('/')
  }

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sessión</h2>
        <form className="login__container--form" onSubmit={hanlderSubmit}>

          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handlerInput}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            onChange={handlerInput}
          />
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
          No tienes ninguna cuenta
          <Link to="/signup">
            Regístrate
          </Link>
        </p>
      </section>
    </section>
  )
}

const mapDispatchToProps = {
  loginRequest,
}

export default connect(null, mapDispatchToProps)(Login)

