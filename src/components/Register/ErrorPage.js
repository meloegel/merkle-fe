import React from 'react';
import Card from '@material-ui/core/Card'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function ErrorPage() {
    const { push } = useHistory();

    const handleClickHome = () => {
        push('/')
    }

    const handleClickReg = () => {
        push('/register')
    }

    return (
        <div>
            <Card id='errorCard'>
                <h1>Unfotunatly an error has occured! :( </h1>
                <h3>Please try and resubmit your registration form</h3>
                <div className='errorCardButtons'>
                    <Button variant="contained" onClick={handleClickHome}>Return to Home Page</Button>
                    <Button variant="contained" onClick={handleClickReg}>Try to submit again</Button>
                </div>
            </Card>
        </div>
    )
}

export default ErrorPage;