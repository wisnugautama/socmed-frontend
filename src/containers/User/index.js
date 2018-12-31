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
                this.setState({
                    users: responseJSON
                })
            })
            .catch((err) => {
                
            })
    }

    renderUser = () => {
        let { users } = this.state
        if (this.state.users !== null) {
            return users.map((user, index) => {
                return (
                    <div key={index} style={styles.contentWrapper}>
                        <div>
                            <img src={`data:image/jpeg;base64,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`} 
                            alt="" style={styles.imgStyle} />
                        </div>
                        <div style={styles.userDetailWrapper}>
                            <h5 style={{ textAlign: 'left', color: '#365899' }}>{user.name}</h5>
                            <p style={{ textAlign: 'left', color: 'gray' }}>{user.address.city}</p>
                            <Link to={`/user/details/${user.id}`} style={{ width: '100px', color: '#365899' }}>See Detail</Link>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div style={styles.containerWrapper}>
                {this.renderUser()}
            </div>
        )
    }
}

const styles = {
    containerWrapper: { 
        display: 'flex', 
        width: window.innerWidth + 'px', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        marginTop: 20 
    },
    contentWrapper: { 
        display: 'flex', 
        marginLeft: 20, 
        backgroundColor: 'white', 
        width: '500px', 
        marginBottom: '20px', 
        alignItems: 'center', 
        height: '150px', 
        borderRadius: 5 
    },
    imgStyle: { 
        width: '120px', 
        height: '100px', 
        marginLeft: 10 
    },
    userDetailWrapper: { 
        marginLeft: 20, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center' 
    }
}

export default User