import React from 'react'
import './assets/styles/App.scss'

import { Header } from './components/Header'
import { Search } from './components/Search'
import { Categories } from './components/Categories'
import { Carousel } from './components/Carousel'
import { Item } from './components/Item'
import { Footer } from './components/Footer'

export const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories>
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
    <Footer />
  </div>
)