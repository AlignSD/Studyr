import React, { Component } from 'react'
import { Cards } from '../../components/Cards/Cards'
import '../../index.css';

export class Home extends Component {
  
  render() {
    return (
      <>
      <div className='container flex-row home-input-container'>
      <input className='home-input' placeholder='Search'></input>
      <button type="submit">Search</button>
      </div>
      
      <div className="container ">
        <div className="cards-container">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      </>
    )
  }
}

export default Home;