import React from 'react'

const UserCard = ({ user }) => {

    return (
        <div>
            <div className='userCard'>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.addressOne}</p>
                <p>{user.addressTwo}</p>
                <p>{user.city}</p>
                <p>{user.state}</p>
                <p>{user.zip}</p>
                <p>{user.country}</p>
                <p>{user.date}</p>
            </div>

        </div>
    )
}

export default UserCard;