import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CardPost extends Component {
    handleDeletePost = (id) => {
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                alert('success delete a post')
            })
    }
    renderPosts = () => {
        let { posts, screen } = this.props
        if (posts) {
            if (!screen) {
                return posts.map((data, index) => {
                    return (
                        <div key={index} style={styles.postWrapper}>
                            {
                                this.props.userId == data.userId
                                &&
                                <div>
                                    <h5 style={styles.textStyle}>{data.title}</h5>
                                    <p style={styles.textStyle}>{data.body}</p>
                                    {!this.props.screen && <Link to={`/post/${data.id}`}>See Details</Link>}
                                </div>
                            }
                        </div>
                    )
                })
            }

            return posts.map((data, index) => {
                return (
                    <div key={index} style={styles.postWrapper}>
                        <h5 style={styles.textStyle}>{data.title}</h5>
                        <p style={styles.textStyle}>{data.body}</p>
                        {this.props.screen !== 'article' && <Link to={`/post/${data.id}`}>See Details</Link>}
                        {this.props.screen == 'article' && <Link to={`/`} onClick={() => this.handleDeletePost(data.id)}>Delete</Link>}
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}

const styles = {
    postWrapper: { 
        marginLeft: 20, 
        marginRight: 20, 
        width: '600px', 
        backgroundColor: 'white', 
        marginBottom: '20px', 
        paddingLeft: '10px', 
        borderRadius: 5, 
        paddingRight: '10px' 
    },
    textStyle: { 
        textAlign: 'left'
    }
}

export default CardPost