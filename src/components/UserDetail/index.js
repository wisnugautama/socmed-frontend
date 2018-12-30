import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardPost from '../CardPost';
import CardAlbum from '../CardAlbum';
import CardUser from '../CardUser';

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

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div>
                    <CardUser 
                       user={this.state.user} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h5 style={{ textAlign: 'left', marginLeft: '20px' }}>Posts</h5>
                    <CardPost
                        posts={this.state.posts}
                        userId={this.props.match.params.id} />
                </div>
                <div>
                    <h5 style={{ marginTop: '20px' }}>Albums</h5>
                    <CardAlbum 
                       albums={this.state.albums}
                       userAlbums={this.props.match.params.id} />
                </div>
            </div>
        )
    }
}

export default UserDetail