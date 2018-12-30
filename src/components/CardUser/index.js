import React, { Component } from 'react';

class CardUser extends Component {
    renderUserDetail = () => {
        let { user } = this.props
        if (user !== null) {
            return (
                <div style={{ width: '300px', backgroundColor: 'white', marginTop: '20px', marginLeft: '20px', borderRadius: 5 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vMaiafi7i7cF_uTr75FdTgqr12IBvpZS0JRidSmjMlhO2oGX`} alt="" style={{ width: '100px', height: '100px', borderRadius: 5, marginRight: '10px', marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }} />
                        <h5>{user.name}</h5>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '20px' }}>
                        <p>Company : {user.company.name}</p>
                        <p>City : {user.address.city}</p>
                        <p>Street : {user.address.street}</p>
                        <p>Email : {user.email}</p>
                        <p>Phone : {user.phone}</p>
                        <p>Website : {user.website}</p>
                    </div>
                </div>
            )
        }
    }

    render () {
        return (
            <div>
                {this.renderUserDetail()}
            </div>
        )
    }
}

export default CardUser