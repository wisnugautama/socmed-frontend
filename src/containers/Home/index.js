import React, { Component } from 'react';
import CardPost from '../../components/CardPost';

class Home extends Component {
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

    render () {
        return (
            <div>
                <CardPost 
                   posts={this.state.posts}
                   screen={"home"} />
            </div>
        )
    }
}

export default Home