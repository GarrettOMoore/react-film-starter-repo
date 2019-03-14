import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Favorite from './Favorite'

class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log("Fetching details for " + film)
    }
    render() {
        const relDate = this.props.film.release_date;
        const relYear = relDate.split('-');
        return (
            <div onClick={ (e) => this.handleDetailsClick(this.props.film.title) } className="film-row">
            <FilmPoster film={this.props.film}/>
                <div className="film-year">
                    <h1>{this.props.film.title}</h1>
                    <p>{relYear[0]}</p>
                </div>
                <Favorite />
            </div>
        )
    }
}

export default FilmRow;