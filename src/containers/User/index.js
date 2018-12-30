import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
    state = { users: null }

    componentWillMount() {
        this.handleGetUsers()
    }

    handleGetUsers = () => {
        let url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log('ini respon', responseJSON)
                this.setState({
                    users: responseJSON
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderUser = () => {
        let { users } = this.state
        if (this.state.users !== null) {
            return users.map((user, index) => {
                return (
                    <div key={index} style={{ marginLeft: 20, display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', marginBottom: '50px' }}>
                        <h3 style={{ textAlign: 'left' }}>{user.name}</h3>
                        <h5 style={{ textAlign: 'left' }}>{user.address.city}</h5>
                        <Link to={`/user/details/${user.id}`} style={{ width: '100px', backgroundColor: 'red' }}>See Detail</Link>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div>
                {this.renderUser()}
            </div>
        )
    }
}

export default User