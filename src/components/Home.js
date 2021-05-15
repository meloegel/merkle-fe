import React from 'react';
import { useHistory } from 'react-router-dom';
import MerkleImg from '../Merkle.png'

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
            <h1> Home</h1>
            <div className='merkleLogo'>
                <img src={MerkleImg} alt='Alt Merkle Logo' />
            </div>
            <div className='test'>
                <button onClick={handleReg}>Register a New User</button>
                <p>or</p>
                <button onClick={handleUserReport} >View Registered User Report</button>
            </div>
        </div>
    )
}

export default Home;