import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class User extends Component {

    updateUser = () => this.props.updateUser(this.props.user.id)

    render() {

        let user = this.props.user

        return (
            <Link to='/catalog'>
                <div onClick={this.updateUser} style={{ backgroundColor: user.backgroundColor }} className="user-box">{user.name}</div>
            </Link>
        )
    }
}

export default User