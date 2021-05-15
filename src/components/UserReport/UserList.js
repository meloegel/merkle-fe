import React from 'react'

import UserCard from './UserCard'

const UserList = (users) => {

    return (
        <div>
            {users.slice(0).reverse().map(user => (
                <UserCard
                    key={user.id}
                    user={user}
                />
            ))}

        </div>
    )
}

export default UserList