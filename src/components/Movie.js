import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Movie extends Component {


    clickedMovie = () => {
        this.updateBudget()
        this.updateRented()
    }

    updateRented = () => this.props.updateRented(this.props.movie.id)

    updateBudget = () => this.props.updateBudget(this.props.movie.id)

    render() {

        let movie = this.props.movie
        

        return (
            <div className="movie-container" style={{ backgroundImage: `url(${movie.img})`, backgroundSize: '100% 100%' }}>

                {movie.isRented[this.props.currentUserId] ? <i className="fas fa-minus-circle" onClick={this.clickedMovie}></i>
                    : <i className="fas fa-plus-circle" onClick={this.clickedMovie}></i>}

                <Link to={`/movies/${movie.id}`}><h2 id="movie-title">{movie.title}</h2></Link>
            </div>
        )
    }
}

export default Movie