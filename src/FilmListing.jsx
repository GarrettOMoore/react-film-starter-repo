import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow'

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
  }
  handleFilterClick = (filter) => {
    this.setState({
      filter: filter
    })
    console.log("Setting string to " + filter)
  }
    render() {
        const allFilms = this.props.films.map( (film, index) => {
            return (
                <FilmRow film={film} key={index}/>
            )
        })

     
        return (
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
              <div onClick={(e) => this.handleFilterClick('all')} className={`film-list-filter
              ${this.state.filter === 'all' ? 'is-active' : null }`}>
                ALL 
                <span className="section-count">{this.props.films.length}</span>
            </div>
            <div onClick={(e) => this.handleFilterClick('fave')} className={`film-list-filter
            ${this.state.filter === 'fave' ? 'is-active' : null }`}>
            FAVES
            <span className="section-count">0</span>
            </div>
            </div>
            <h1>{allFilms}</h1>
          </div>
        )
    }
}

export default FilmListing;