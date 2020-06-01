import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import deleteIcon from '../assets/static/deleteIcon.webp'
import addIcon from '../assets/static/plus-icon.png'
import playIcon from '../assets/static/play-icon.png'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/Item.scss'

const Item = ({ id, cover, title, year, contentRating, duration, isList, ...props }) => {

  const handlerSetFavorite = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration })
  }

  const handlerDeleteFavorite = () => {
    props.deleteFavorite(id)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}/>
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              src={playIcon}
              alt="play"
            />
          </Link>
          {isList ?
            <img
              src={deleteIcon}
              alt="delete"
              onClick={handlerDeleteFavorite}
            />
            :
            <img
              src={addIcon}
              alt="plus"
              onClick={handlerSetFavorite}
            />
          }          
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  )
}

Item.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(Item)