import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/Item.scss'

export const Item = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title}/>
    <div className="carousel-item__details">
      <div>
        <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" alt="play"/>
        <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" alt="plus"/>
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
)

Item.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
}