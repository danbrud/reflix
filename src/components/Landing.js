import React, { Component } from 'react'
import User from './User'

class Landing extends Component {

    render() {
        
        return(
            <div>
                <h1>WHO'S WATCHING?</h1>
                <div id="user-container">
                    {this.props.users.map(u => <User key={u.name} user={u} updateUser={this.props.updateUser}/>)}
                </div>
            </div>
        )
    }
}

export default Landing