import React from 'react';
import { useHistory } from 'react-router-dom';
import MerkleImg from '../Merkle.png'
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card'

function Home() {
    const { push } = useHistory();

    const handleReg = () => {
        push('/register')
    }

    const handleUserReport = () => {
        push('/userReport')
    }

    return (
        <div>
            <Card id='homeCard'>
                <div className='merkleLogo'>
                    <img src={MerkleImg} alt='Alt Merkle Logo' />
                </div>
                <div className='homeButtonContainer'>
                    <Button variant="contained" color='primary' style={{ width: '15rem', margin: '0 auto' }} onClick={handleReg}>Register a New User</Button>
                    <Button variant="contained" color='primary' style={{ width: '15rem', margin: '0 auto' }} onClick={handleUserReport} >Registered User Report</Button>
                </div>
            </Card>
        </div>
    )
}

export default Home;