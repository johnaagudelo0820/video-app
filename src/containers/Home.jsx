import React from 'react'
import '../assets/styles/App.scss'

import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { Categories } from '../components/Categories'
import { Carousel } from '../components/Carousel'
import { Item } from '../components/Item'
import { Footer } from '../components/Footer'

import { useInitialState } from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState';

export const Home = () => {
  const videos = useInitialState(API, {
    'mylist': [],
    'trends': [],
    'originals': [],
  });

  return (
    <>
      <Search />

      {
        videos.mylist.length > 0 &&
          <Categories title="Tendencias">
            <Carousel>
              {videos.mylist.map(item => (
                <Item key={item.id} {...item}/>
              ))}
            </Carousel>
          </Categories>
      }
    
    
      {
        videos.trends.length > 0 &&
          <Categories title="Tendencias">
            <Carousel>
              {videos.trends.map(item => (
                <Item key={item.id} {...item}/>
              ))}
            </Carousel>
          </Categories>
      }

      {
        videos.originals.length > 0 &&
          <Categories title="Originales de Platzi Video">
            <Carousel>
              {videos.originals.map(item => (
                <Item key={item.id} {...item}/>
              ))}
            </Carousel>
          </Categories>
      }
  
    </>
  )
}
