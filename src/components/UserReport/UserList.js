import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormatDateTime from '../FormatDateTime'


const UserList = () => {
    const [users, setUsers] = useState([])

    const getUserReport = () => {
        axios.get('https://merkle-be.herokuapp.com/api/users/')
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
            <TableContainer id='userTable' component={Paper}>
                <Table aria-label="user table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Address1</TableCell>
                            <TableCell align="right">Address2</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">State</TableCell>
                            <TableCell align="right">Zip</TableCell>
                            <TableCell align="right">Country</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.slice(0).reverse().map(user => (
                            <TableRow key={user.id}>
                                <TableCell align='right'>{user.firstName}</ TableCell>
                                <TableCell align='right'>{user.lastName}</ TableCell>
                                <TableCell align='right'>{user.addressOne}</ TableCell>
                                <TableCell align='right'>{user.addressTwo}</ TableCell>
                                <TableCell align='right'>{user.city}</ TableCell>
                                <TableCell align='right'>{user.state}</ TableCell>
                                <TableCell align='right'>{user.zip}</ TableCell>
                                <TableCell align='right'>{user.country}</ TableCell>
                                <TableCell align='right'>{FormatDateTime(user.date)}</ TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


export default UserList