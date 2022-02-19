import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../index.css';
import './Cards.css'
import Picture from '../../assets/images/AWorldApart.png'
import Playlist from '../../pages/Playlist/Playlist'

export class Cards extends Component {
  render() {
    return (
      <Link to='/playlist' className="card">
        <img src={Picture} alt="card header image" className="card-image" />
        <div className="card-body">
          <p>Card Title</p>
          <p>Card Description Text Card Description Text Card Description Text Card Description Text</p>
        </div>
      </Link>
    )
  }
}

export default Cards;