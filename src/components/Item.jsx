import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import deleteIcon from '../assets/static/deleteIcon.webp'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/Item.scss'

const Item = ({ id, cover, title, year, contentRating, duration, ...props }) => {

  const handlerSetFavorite = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration })
  }

  const handlerDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}/>
      <div className="carousel-item__details">
        <div>
          <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" alt="play"/>
          <img
            src="https://img.icons8.com/flat_round/64/000000/play--v1.png"
            alt="plus"
            onClick={handlerSetFavorite}
          />
          <img
            src={deleteIcon}
            alt="delete"
            onClick={() => handlerDeleteFavorite(id)}
          />
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