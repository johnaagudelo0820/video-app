import React from 'react'
import '../assets/styles/components/Item.scss'

export const Item = () => (
  <div className="carousel-item">
    <img className="carousel-item__img" src="https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?cs=srgb&dl=woman-wearing-grey-long-sleeved-top-photography-1122868.jpg&fm=jpg" alt="people "/>
    <div className="carousel-item__details">
      <div>
        <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" alt="play"/>
        <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" alt="plus"/>
      </div>
      <p className="carousel-item__details--title">Titulo descriptivo</p>
      <p className="carousel-item__details--subtitle">2019 15+ 114 minutos</p>
    </div>
  </div>
)