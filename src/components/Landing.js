import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Landing extends Component {

    constructor() {
        super()
        this.state = {
            users: [
                {name: "Danny", backgroundColor: "#03B5AA"},
                {name: "Tal", backgroundColor: "#59114D"},
                {name: "Sammy", backgroundColor: "#E98A15"},
                {name: "Tammy", backgroundColor: "#157F1F"}
            ]
        }
    }

    showUsers = () => {
        let users = this.state.users

        let element = users.map(u => <Link to='/catalog'><div style={{backgroundColor: u.backgroundColor}} key={u.name} className="user-box">{u.name}</div></Link>)

        return element
    }

    render() {

        return(
            <div>
                <h1>WHO'S WATCHING?</h1>
                <div id="user-container">
                    {this.showUsers()}
                </div>
            </div>
        )
    }
}

export default Landing