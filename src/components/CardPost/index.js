import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CardPost extends Component {
    state = { posts: null }

    componentWillMount() {
        this.handleGetPosts()
    }

    handleGetPosts = () => {
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

    renderPosts = () => {
        let { posts } = this.state
        if (posts !== null) {
            return posts.map((data, index) => {
                return (
                    <div key={index} style={{ marginLeft: 20, marginRight: 20 }}>
                        <h3 style={{ textAlign: 'left' }}>{data.title}</h3>
                        <h5 style={{ textAlign: 'left' }}>{data.body}</h5>
                        <Link to={`/posts/${data.id}`}>See Details</Link>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Today's News</h1>
                {this.renderPosts()}
            </div>
        )
    }
}

export default CardPost