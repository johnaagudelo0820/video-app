import React from 'react'
import { connect } from 'react-redux'

import '../assets/styles/App.scss'
import { Search } from '../components/Search'
import { Categories } from '../components/Categories'
import { Carousel } from '../components/Carousel'
import Item from '../components/Item'


const Home = ({ mylist, trends, originals }) => {
  /* onst videos = useInitialState(API, {
    'mylist': [],
    'trends': [],
    'originals': [],
  }); */

  return (
    <>
      <Search />

      {
        mylist.length > 0 &&
          <Categories title="Tendencias">
            <Carousel>
              {mylist.map(item => (
                <Item key={item.id} {...item}/>
              ))}
            </Carousel>
          </Categories>
      }
    
    
      {
        trends.length > 0 &&
          <Categories title="Tendencias">
            <Carousel>
              {trends.map(item => (
                <Item key={item.id} {...item}/>
              ))}
            </Carousel>
          </Categories>
      }

      {
        originals.length > 0 &&
          <Categories title="Originales de Platzi Video">
            <Carousel>
              {originals.map(item => (
                <Item key={item.id} {...item}/>
              ))}
            </Carousel>
          </Categories>
      }
  
    </>
  )
}

const mapStateToProps = state => ({
  mylist: state.mylist,
  trends: state.trends,
  originals: state.originals,
})

export default connect(mapStateToProps, null)(Home)
