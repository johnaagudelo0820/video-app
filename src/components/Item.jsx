import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setFavorite } from '../actions'
import '../assets/styles/components/Item.scss'

const Item = ({ cover, title, year, contentRating, duration, setFavorite }) => {

  const handlerSetFavorite = () => {
    setFavorite({ cover, title, year, contentRating, duration, setFavorite })
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
}

export default connect(null, mapDispatchToProps)(Item)