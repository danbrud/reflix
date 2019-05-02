import React, { Component } from 'react'
import Movie from './Movie'

class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: ""
        }
    }

    updateSearch = event => this.setState({ searchValue: event.target.value })


    hasRentals = () => this.props.movies.some(m => m.isRented)

    moviesToDisplay = movie => {
        return (
            movie.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
                ? <Movie updateRented={this.props.updateRented} movie={movie} key={movie.id} />
                : null
        )
    }

    getRentedSection = () => {
        let rentedMovies = this.props.movies.filter(m => m.isRented)

        let element = (
            <div>
                <p>Rented:</p>
                <div className="catalog-container">
                    {rentedMovies.map(m => this.moviesToDisplay(m))}
                </div>
            </div>
        )

        return element
    }


    render() {
        return (
            <div id="catalog-page">
                <div id="search-container">
                    <input type="text" placeholder="Search a movie" value={this.state.searchValue} onChange={this.updateSearch} />
                    <p id="budget">BUDGET: ${this.props.budget}</p>
                </div>
                {this.hasRentals() ? this.getRentedSection() : null}
                <div>
                    <p>CATALOG:</p>
                    <div className="catalog-container">
                        {this.props.movies
                            .map(m => this.moviesToDisplay(m))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog