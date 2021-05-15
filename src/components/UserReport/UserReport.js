import axios from 'axios';
import React, { useEffect, useState } from 'react';

import UserList from './UserList'

function UserReport() {
    const [users, setUsers] = useState([])

    const getUserReport = () => {
        axios.get('http://localhost:8000/api/users/')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUserReport()
    }, [])

    return (
        <div>
            <h1>User Report</h1>
            <UserList users={users} />
        </div>
    )
}

export default UserReport;