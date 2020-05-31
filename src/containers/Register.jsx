import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 

import '../assets/styles/components/Login.scss'

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  })

  const hanlderInput = event => {
    const { value, name } = event.target
    setValues({
      ...form,
      [name]: value,
    })
  }

  const handlerSubmit = event => {
    event.preventDefault()
    console.log(form)
  }
  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sessión</h2>
        <form className="login__container--form" onSubmit={handlerSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={hanlderInput}
            name="name"
            required
          />
          <input
            className="input"
            type="email"
            placeholder="Correo"
            onChange={hanlderInput}
            name="email"
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={hanlderInput}
            name="password"
            required
          />
          <button className="button">Registrar</button>
        </form>
        <Link to="/signin">
          Iniciar Sesión
        </Link>
      </section>
    </section>
  )
}

export default connect(null, null)(Register)