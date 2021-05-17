import React from 'react';
import Card from '@material-ui/core/Card'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function ConformationPage() {
    const { push } = useHistory();

    const handleClick = () => {
        push('/')
    }

    return (
        <div>
            <Card id='confirmCard'>
                <h1>New user has been created!</h1>
                <Button variant="contained" color='primary' onClick={handleClick}>Return to Home Page</Button>
            </Card>
        </div>
    )
}

export default ConformationPage;