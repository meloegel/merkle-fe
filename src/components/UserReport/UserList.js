import axios from 'axios';
import React, { useEffect, useState } from 'react';

import UserCard from './UserCard'

const UserList = () => {
    const [users, setUsers] = useState([])

    const getUserReport = () => {
        axios.get('http://localhost:8000/api/users/')
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUserReport()
    }, [])

    console.log(users)
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