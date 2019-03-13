import React, { Component } from 'react';
import FilmPoster from './FilmPoster'

class FilmRow extends Component {
    render() {
        let relDate = this.props.film.release_date;
        let relYear = relDate.split('-');
        return (
            <div className="film-row">
            <FilmPoster film={this.props.film}/>
                <h1>{this.props.film.title}</h1>
                <p>{relYear[0]}</p>
            </div>
        )
    }
}

export default FilmRow;