import React, { Component } from 'react';

class CardAlbum extends Component {
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