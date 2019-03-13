import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow'

class FilmListing extends Component {
    render() {
        const allFilms = this.props.films.map( (film) => {
            return (
                <FilmRow film={film}/>
            )
        })
        return (
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <h1>{allFilms}</h1>
          </div>
        )
    }
}

export default FilmListing;