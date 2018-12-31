import React, { Component } from 'react';
import CardPost from '../../components/CardPost';

class Home extends Component {
    state = {
        posts: [],
        title: '',
        body: '',
        newPost: []
    }

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

    handleSharePost = () => {
        let url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                alert('success create a post')
                console.log(responseJSON)
                let newArr = []
                newArr.push(responseJSON)
                this.setState({
                    title: '',
                    body: '',
                    newPost: newArr
                })
            })
            .catch((err) => { })
    }

    handleSetBody = (event) => {
        this.setState({
            body: event.target.value
        })
    }

    handleSetTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexDirection: 'row' }}>
                <div>
                    <h4>Today's News </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <input
                            type="text"
                            placeholder="Title"
                            onChange={this.handleSetTitle}
                            value={this.state.title}
                            style={{ width: '600px', borderRadius: 5, marginBottom: '20px', height: '30px' }} />
                        <input
                            type="text"
                            placeholder="whats going on today?"
                            onChange={this.handleSetBody}
                            value={this.state.body}
                            style={{ width: '600px', borderRadius: 5, marginBottom: '20px', height: '70px' }} />
                        <button onClick={this.handleSharePost}>Share</button>
                    </div>
                    <CardPost
                        posts={this.state.newPost}
                        screen={"home"} />
                    <CardPost
                        posts={this.state.posts}
                        screen={"home"} />
                </div>
            </div>
        )
    }
}

export default Home