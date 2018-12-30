import React, { Component } from 'react';

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

    renderUserPost = () => {
        let { user, posts } = this.state
        if (posts !== null) {
            return posts.map((data, index) => {
                return (
                    <div key={index}>
                        {
                            data.userId == this.props.match.params.id
                            &&
                            <div>
                                <h3>{data.title}</h3>
                                <h5>{data.body}</h5>
                            </div>
                        }
                    </div>
                )
            })
        }
    }

    renderUserAlbums = () => {
        let { albums } = this.state
        if (albums !== null) {
            return albums.map((data, index) => {
                return (
                    <div key={index}>
                        {
                            data.userId == this.props.match.params.id
                            &&
                            <div>
                                <h3>{data.title}</h3>
                            </div>
                        }
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                {this.renderUserDetail()}
                <h3>Post</h3>
                {this.renderUserPost()}
                <h3>Albums</h3>
                {this.renderUserAlbums()}
            </div>
        )
    }
}

export default UserDetail