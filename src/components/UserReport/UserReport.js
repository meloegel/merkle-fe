import React from 'react'

import UserList from './UserList'

function UserReport() {

    return (
        <div className='userReportContainer'>
            <h1 style={{ color: 'oldlace' }}>Registered User Report</h1>
            <UserList />
        </div>
    )
}

export default UserReport;