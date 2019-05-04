import React, { Component } from 'react'
import Movie from './Movie'
import {Redirect} from 'react-router-dom'

class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: ""
        }
    }

    updateSearch = event => this.setState({ searchValue: event.target.value })


    hasRentals = () => this.props.movies.some(m => m.isRented[this.props.currentUserId])

    moviesToDisplay = movie => {
        return (
            movie.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
                ? <Movie currentUserId={this.props.currentUserId} updateRented={this.props.updateRented} updateBudget={this.props.updateBudget} movie={movie} key={movie.id} />
                : null
        )
    }

    getRentedSection = () => {
        let rentedMovies = this.props.movies.filter(m => m.isRented[this.props.currentUserId])

        let element = (
            <div>
                <p className="section">RENTED:</p>
                <div className="catalog-container">
                    {rentedMovies.map(m => this.moviesToDisplay(m))}
                </div>
            </div>
        )

        return element
    }

    redirect = () => <Redirect to="/" />


    render() {

        if(this.props.currentUserId < 0) {
            return this.redirect()
        }

        let user = this.props.users.find(u => u.id === this.props.currentUserId)

        return (
            <div id="catalog-page">
                <div id="search-container">
                    <input type="text" placeholder="Search a movie" value={this.state.searchValue} onChange={this.updateSearch} />
                    <p id="budget">BUDGET: ${user.budget}</p>
                </div>
                {this.hasRentals() ? this.getRentedSection() : null}
                <div>
                    <p className="section">CATALOG:</p>
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