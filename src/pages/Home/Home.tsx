import React, { Component } from 'react'
import { Cards } from '../../components/Cards/Cards'
import '../../index.css';

export class Home extends Component {
  render() {
    return (
      <>
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