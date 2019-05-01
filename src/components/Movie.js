import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Movie extends Component {


    updateRented = () => this.props.updateRented(this.props.movie.id)

    render() {

        let movie = this.props.movie

        return (
            <div className="movie-container">
                {movie.isRented ? <i className="fas fa-minus-circle" onClick={this.updateRented}></i>
                    : <i className="fas fa-plus-circle" onClick={this.updateRented}></i>}
                <img src={movie.img} />
                <Link to={`/movies/${movie.id}`}><h2>movie.title</h2></Link>
            </div>
        )
    }
}

export default Movie