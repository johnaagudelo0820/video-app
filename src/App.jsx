import React, { useEffect, useState } from 'react'
import './assets/styles/App.scss'

import { Header } from './components/Header'
import { Search } from './components/Search'
import { Categories } from './components/Categories'
import { Carousel } from './components/Carousel'
import { Item } from './components/Item'
import { Footer } from './components/Footer'

export const App = () => {
  const [videos, setVideos] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then(res => res.json())
      .then(data => {
        setVideos(data)
      })
  }, [])

  console.log(videos)

  return (
    <div className="App">
      <Header />
      <Search />
    
      <Categories title="Mi lista">
        <Carousel>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Carousel>
      </Categories>
    
      <Categories title="Tendencias">
        <Carousel>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Carousel>
      </Categories>
    
      <Categories title="Originales de Platzi Video">
        <Carousel>
          <Item />
          <Item />
        </Carousel>
      </Categories>
    
      <Footer />
    </div>
  )
}
