import React, { Component } from 'react';

class UserDetail extends Component {
    state = { user: null }

    componentWillMount() {
        this.handleGetUserDetail()
    }

    handleGetUserDetail = () => {
        let url = `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    user: responseJSON
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderUserDetail = () => {
        let { user } = this.state
        if (user !== null) {
            return (
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={`https://i.pinimg.com/originals/0b/af/10/0baf106e328a19dddd2093436197961f.png`} alt="" style={{ width: '50px', height: '60px' }} />
                        <h3>{user.name}</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>Company : {user.company.name}</p>
                        <p>City : {user.address.city}</p>
                        <p>Street : {user.address.street}</p>
                        <p>Email : {user.email}</p>
                        <p>Phone : {user.phone}</p>
                        <p>Website : {user.website}</p>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderUserDetail()}
            </div>
        )
    }
}

export default UserDetail