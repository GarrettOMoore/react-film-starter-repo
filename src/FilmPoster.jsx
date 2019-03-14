import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {
        const poster = this.props.film.poster_path;
        return (
            <img src={`https://image.tmdb.org/t/p/w780/${poster}`} alt="poster" />
        )
    }
}

export default FilmPoster;