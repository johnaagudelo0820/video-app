import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo.png'
import avatar from '../assets/static/user.png'

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handlerLoout = () => {
    props.logoutRequest({})
  }

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="logo" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser
            ? <img src={gravatar(user.email)} alt={user.email} />
            : <img src={avatar} alt="avatar user" />
          }
          <p>Perfil</p>
        </div>
        <ul>
        {hasUser &&
          <li><Link to="/">{user.name}</Link></li>
        }
        {hasUser
          ? <li><a href="#logout" onClick={handlerLoout}>Cerrar Sessión</a></li>
          : <li><Link to="/signin">Iniciar Sessión</Link></li>
        }
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);