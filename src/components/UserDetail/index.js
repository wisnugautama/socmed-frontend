import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardPost from '../CardPost';

class UserDetail extends Component {
    state = { user: null, posts: null, albums: null }

    componentWillMount() {
        this.handleGetUserDetail()
        this.handleGetUserPost()
        this.handleGetUserAlbum()
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

    handleGetUserPost = () => {
        let url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                this.setState({
                    posts: responseJSON
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleGetUserAlbum = () => {
        let url = `https://jsonplaceholder.typicode.com/albums`;
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                this.setState({
                    albums: responseJSON
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
                <div style={{ width: '300px', backgroundColor: 'white', marginTop: '20px', marginLeft: '20px', borderRadius: 5 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vMaiafi7i7cF_uTr75FdTgqr12IBvpZS0JRidSmjMlhO2oGX`} alt="" style={{ width: '100px', height: '100px', borderRadius: 5, marginRight: '10px', marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }} />
                        <h5>{user.name}</h5>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '20px' }}>
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

    renderUserAlbums = () => {
        let { albums } = this.state
        if (albums !== null) {
            return albums.map((data, index) => {
                return (
                    <div key={index} style={{ backgroundColor: 'white', borderRadius: 5 }}>
                        {
                            data.userId == this.props.match.params.id
                            &&
                            <div style={{ height: '60px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                                <p style={{ textAlign: 'left', paddingLeft: '20px' }}>{data.title}</p>
                            </div>
                        }
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div>
                    {this.renderUserDetail()}
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h5 style={{ textAlign: 'left', marginLeft: '20px' }}>Posts</h5>
                    <CardPost
                        posts={this.state.posts} />
                </div>
                <div>
                    <h5 style={{ marginTop: '20px' }}>Albums</h5>
                    {this.renderUserAlbums()}
                </div>
            </div>
        )
    }
}

export default UserDetail