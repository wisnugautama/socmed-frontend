import React, { Component } from 'react';
import CardPost from '../../components/CardPost';
import { Link } from 'react-router-dom';
let newArr = []

class Article extends Component {
    state = { posts: null, comments: null, title: '', newComment: [], judul: '', body: '', edit: false }

    componentWillMount() {
        this.handleGetPosts()
        this.handleGetComments()
    }

    handleDeleteComment = (id) => {
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                alert('success delete a comment')
            })
    }

    handleGetPosts = () => {
        let url = `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`;
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    posts: [responseJSON],
                    judul: responseJSON.title,
                    body: responseJSON.body
                })
            })
            .catch((err) => {
            })
    }

    handleEditPost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: this.state.judul,
                body: this.state.body,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                alert('success edit a post')
                this.setState({
                    judul: json.title,
                    body: json.body,
                    edit: false
                })
            })
    }

    handleGetComments = () => {
        let url = `https://jsonplaceholder.typicode.com/comments`;
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    comments: responseJSON
                })
            })
            .catch((err) => {

            })
    }

    postComment = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                newArr.unshift(json)
                this.setState({
                    title: '',
                    newComment: newArr

                })
            })
    }

    handleSetComment = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSetJudul = (event) => {
        this.setState({
            judul: event.target.value
        })
    }

    handleSetBody = (event) => {
        this.setState({
            body: event.target.value
        })
    }

    renderComments = () => {
        if (this.state.comments !== null) {
            return this.state.comments.map((data, index) => {
                return (
                    <div key={index} style={styles.commentWrapper}>
                        {
                            this.props.match.params.id == data.postId
                            &&
                            <div style={styles.commentText}>
                                <h5>{data.name}</h5>
                                <p>{data.body}</p>
                                <button onClick={() => this.handleDeleteComment(data.id)}>Delete</button>
                            </div>
                        }
                    </div>
                )
            })
        }
    }

    renderComment = () => {
        return this.state.newComment.map((data, index) => {
            return (
                <div key={index} style={styles.commentWrapper}>
                    <div style={styles.commentText}>
                        <h5>Wisnu</h5>
                        <p>{data.title}</p>
                        <button onClick={() => this.handleDeleteComment(index)}>Delete</button>
                    </div>
                </div>
            )
        })
    }

    renderEdit = () => {
        return (
            <div style={styles.formWrapper}>
                <h5>Edit Post</h5>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={this.handleSetJudul}
                    value={this.state.judul}
                    style={{ width: '600px', borderRadius: 5, marginBottom: '20px', height: '30px' }} />
                <input
                    type="text"
                    placeholder="whats going on today?"
                    onChange={this.handleSetBody}
                    value={this.state.body}
                    style={{ width: '600px', borderRadius: 5, marginBottom: '20px', height: '70px' }} />
                <div style={{ display: 'flex' }}>
                    <button onClick={() => this.setState({ edit: false })}>Cancel</button>
                    <button onClick={this.handleEditPost}>Edit</button>
                </div>
            </div>
        )
    }

    handleSetEdit = () => {
        this.setState({
            edit: true
        })
    }

    render() {
        return (
            <div style={styles.contentWrapper}>
                {
                    !this.state.edit ?
                        <div>
                            <div style={{ marginTop: '20px' }}>
                                <h5 style={{ textAlign: 'center' }}>Posts</h5>
                                <CardPost
                                    posts={this.state.posts}
                                    screen={"article"}
                                    edit={this.handleSetEdit} />
                            </div>
                        </div>
                        :
                        <div>
                            {this.renderEdit()}
                        </div>
                }
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p>Write your comment below</p>
                    <input
                        type="text"
                        onChange={this.handleSetComment}
                        style={styles.textInputStyle}
                        value={this.state.title} />
                    <button style={styles.buttonStyle} onClick={this.postComment}>Submit</button>
                </div>
                <div>
                    <h5 style={{ textAlign: 'left' }}>Comments</h5>
                    {this.renderComment()}
                    {this.renderComments()}
                </div>
            </div>
        )
    }
}

const styles = {
    contentWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInputStyle: {
        width: '600px',
        height: '70px',
        marginBottom: '20px'
    },
    buttonStyle: {
        width: '100px',
        marginBottom: '20px'
    },
    commentWrapper: {
        backgroundColor:
            'white',
        width: '600px',
        marginBottom: '20px'
    },
    commentText: {
        textAlign: 'left',
        paddingLeft: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingRight: '20px'
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

}

export default Article