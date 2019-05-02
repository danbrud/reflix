import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Landing extends Component {

    showUsers = () => {
        let users = this.props.users

        let element = users.map(u => <Link to='/catalog' key={u.name}><div style={{backgroundColor: u.backgroundColor}} className="user-box">{u.name}</div></Link>)

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