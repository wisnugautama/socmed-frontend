import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CardPost extends Component {
    renderPosts = () => {
        let { posts } = this.props
        if (posts !== null) {
            return posts.map((data, index) => {
                return (
                    <div key={index} style={{ marginLeft: 20, marginRight: 20, width: '600px', backgroundColor: 'white', marginBottom: '20px', paddingLeft: '10px', borderRadius: 5, paddingRight: '10px' }}>
                        <h5 style={{ textAlign: 'left' }}>{data.title}</h5>
                        <p style={{ textAlign: 'left' }}>{data.body}</p>
                        <Link to={`/posts/${data.id}`}>See Details</Link>
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

export default CardPost