import React, { Component } from 'react';

class CardAlbum extends Component {
    state = { photos: null }

    componentWillMount () {
        this.handleGetAlbumPhotos()
    }

    handleGetAlbumPhotos = () => {
        let url = `https://jsonplaceholder.typicode.com/photos`;
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    photos: responseJSON
                })
            })
            .catch((err) => {
                alert(err)
            })
    }

    renderPhotos = (albumId) => {
        if (this.state.photos) {
            return this.state.photos.map((data,index) => {
                return (
                    <div>
                            <img src={data.url}/>
                    </div>
                )
            })
        }
    }

    renderUserAlbums = () => {
        let { albums } = this.props
        if (albums !== null) {
            return albums.map((data, index) => {
                return (
                    <div key={index} style={styles.albumWrapper}>
                        {
                            data.userId == this.props.userAlbums
                            &&
                            <div style={styles.albumContent}>
                                <p style={styles.albumText}>{data.title}</p>
                                {/* {this.renderPhotos(data.albumId)} */}
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
                {this.renderUserAlbums()}
            </div>
        )
    }
}

const styles = {
    albumWrapper: {
        borderRadius: 5,
        backgroundColor: 'white'
    },
    albumContent: { 
        height: '60px', 
        marginBottom: '20px', 
        display: 'flex', 
        alignItems: 'center'
    },
    albumText: { 
        textAlign: 'left', 
        paddingLeft: '20px' 
    }
}

export default CardAlbum