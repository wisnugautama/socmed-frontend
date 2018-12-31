import React, { Component } from 'react';
import CardPost from '../../components/CardPost';

class Article extends Component {
    state = { posts: null, comments: null }

    componentWillMount() {
        this.handleGetPosts()
        this.handleGetComments()
    }

    handleGetPosts = () => {
        let url = `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`;
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log('ini lo json', responseJSON)
                this.setState({
                    posts: [responseJSON]
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleGetComments = () => {
        let url = `https://jsonplaceholder.typicode.com/comments`;
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log('ini lo comment', responseJSON)
                this.setState({
                    comments: responseJSON
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    postComment = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    renderComments = () => {
        if (this.state.comments !== null) {
            return this.state.comments.map((data, index) => {
                return (
                    <div key={index} style={{ backgroundColor: 'white', width: '600px', marginBottom: '20px' }}>
                        {
                            this.props.match.params.id == data.postId
                            &&
                            <div style={{ textAlign: 'left', paddingLeft: '20px', paddingTop: '20px', paddingBottom: '20px', paddingRight: '20px' }}>
                                <h5>{data.name}</h5>
                                <p>{data.body}</p>
                            </div>
                        }
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                    <h5 style={{ textAlign: 'center' }}>Posts</h5>
                    <CardPost
                        posts={this.state.posts}
                        screen={"article"} />
                </div>
                {/* <div>
                    <p>write your comment below</p>
                    <input type="text" style={{ width: '600px' }} />
                    <button onClick={this.postComment}>Submit</button>
                </div> */}
                <div>
                    <h5 style={{ textAlign: 'left' }}>Comments</h5>
                    {this.renderComments()}
                </div>
            </div>
        )
    }
}

export default Article