import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films}/>
        <FilmDetails films={TMDB.films} />
      </div>
      
    );
  }
}

export default App;
