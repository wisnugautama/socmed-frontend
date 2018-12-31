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
                console.log('album photo', responseJSON)
                this.setState({
                    photos: responseJSON
                })
            })
            .catch((err) => {
                console.log(err)
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
                    <div key={index} style={{ backgroundColor: 'white', borderRadius: 5 }}>
                        {
                            data.userId == this.props.userAlbums
                            &&
                            <div style={{ height: '60px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                                <p style={{ textAlign: 'left', paddingLeft: '20px' }}>{data.title}</p>
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

export default CardAlbum