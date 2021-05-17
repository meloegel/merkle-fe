import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import * as yup from 'yup';
import RegistrationSchema from './RegistrationSchema'
import { Button } from '@material-ui/core';
import axios from 'axios';
import Card from '@material-ui/core/Card'

const initialFormValues = {
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    country: '',
};

const initialFormErrors = {
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    country: '',
};

function Register() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const handleConformation = (res) => {
        if (res.status === 201) {
            push('/conformation')
        } else
            push('/error')
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        axios.post('https://merkle-be.herokuapp.com/api/users/register', formValues)
            .then((res) => {
                handleConformation(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onInputChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        yup
            .reach(RegistrationSchema, name)
            .validate(value)
            .then((valid) => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                });
            })
            .catch((error) => {
                setFormErrors({
                    ...formErrors,
                    [name]: error.errors[0],
                });
            });
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    return (
        <div className='newUserForm'>
            <Card id='regCard'>
                <FormControl onSubmit={onSubmit} validate >
                    <div>
                        <h2>Registration Form</h2>
                        <div className='inputContainer'>
                            <div className='inputGroup'>
                                <TextField
                                    values={formValues.firstName}
                                    onChange={onInputChange}
                                    variant="filled"
                                    name='firstName'
                                    label='First Name'
                                    type='text'
                                    className='input'
                                />
                                <TextField
                                    values={formValues.lastName}
                                    onChange={onInputChange}
                                    variant="filled"
                                    name='lastName'
                                    label='Last Name'
                                    type='text'
                                    className='input'
                                />
                            </div>
                            <div className='inputGroup'>
                                <TextField
                                    values={formValues.addressOne}
                                    onChange={onInputChange}
                                    variant="filled"
                                    name='addressOne'
                                    label='Address'
                                    type='text'
                                    className='input'
                                />
                                <TextField
                                    values={formValues.addressTwo}
                                    onChange={onInputChange}
                                    variant="filled"
                                    name='addressTwo'
                                    label='Address Cont.'
                                    type='text'
                                    className='input'
                                />
                            </div>
                            <div className='cityState'>
                                <TextField
                                    values={formValues.city}
                                    onChange={onInputChange}
                                    variant="filled"
                                    name='city'
                                    style={{ width: '15rem' }}
                                    label='City'
                                    type='text'
                                    className='input'
                                />
                                <div >
                                    <FormControl className='input'>
                                        <InputLabel>State</InputLabel>
                                        <Select
                                            labelId='State'
                                            variant="filled"
                                            name='state'
                                            style={{ width: '5rem' }}
                                            value={formValues.state}
                                            onChange={onInputChange}
                                        >
                                            <MenuItem value={'AL'}>AL</MenuItem>
                                            <MenuItem value={'AK'}>AK</MenuItem>
                                            <MenuItem value={'AZ'}>AZ</MenuItem>
                                            <MenuItem value={'AR'}>AR</MenuItem>
                                            <MenuItem value={'CA'}>CA</MenuItem>
                                            <MenuItem value={'CO'}>CO</MenuItem>
                                            <MenuItem value={'CT'}>CT</MenuItem>
                                            <MenuItem value={'DE'}>DE</MenuItem>
                                            <MenuItem value={'DC'}>DC</MenuItem>
                                            <MenuItem value={'FL'}>FL</MenuItem>
                                            <MenuItem value={'GA'}>GA</MenuItem>
                                            <MenuItem value={'HI'}>HI</MenuItem>
                                            <MenuItem value={'ID'}>ID</MenuItem>
                                            <MenuItem value={'IL'}>IL</MenuItem>
                                            <MenuItem value={'IN'}>IN</MenuItem>
                                            <MenuItem value={'IA'}>IA</MenuItem>
                                            <MenuItem value={'KS'}>KS</MenuItem>
                                            <MenuItem value={'KY'}>KY</MenuItem>
                                            <MenuItem value={'LA'}>LA</MenuItem>
                                            <MenuItem value={'ME'}>ME</MenuItem>
                                            <MenuItem value={'MD'}>MD</MenuItem>
                                            <MenuItem value={'MA'}>MA</MenuItem>
                                            <MenuItem value={'MI'}>MI</MenuItem>
                                            <MenuItem value={'MN'}>MN</MenuItem>
                                            <MenuItem value={'MS'}>MS</MenuItem>
                                            <MenuItem value={'MO'}>MO</MenuItem>
                                            <MenuItem value={'MT'}>MT</MenuItem>
                                            <MenuItem value={'NE'}>NE</MenuItem>
                                            <MenuItem value={'NV'}>NV</MenuItem>
                                            <MenuItem value={'NH'}>NH</MenuItem>
                                            <MenuItem value={'NJ'}>NJ</MenuItem>
                                            <MenuItem value={'NM'}>NM</MenuItem>
                                            <MenuItem value={'NY'}>NY</MenuItem>
                                            <MenuItem value={'NC'}>NC</MenuItem>
                                            <MenuItem value={'ND'}>ND</MenuItem>
                                            <MenuItem value={'OH'}>OH</MenuItem>
                                            <MenuItem value={'OK'}>OK</MenuItem>
                                            <MenuItem value={'OR'}>OR</MenuItem>
                                            <MenuItem value={'PA'}>PA</MenuItem>
                                            <MenuItem value={'RI'}>RI</MenuItem>
                                            <MenuItem value={'SC'}>SC</MenuItem>
                                            <MenuItem value={'SD'}>SD</MenuItem>
                                            <MenuItem value={'TN'}>TN</MenuItem>
                                            <MenuItem value={'TX'}>TX</MenuItem>
                                            <MenuItem value={'UT'}>UT</MenuItem>
                                            <MenuItem value={'VT'}>VT</MenuItem>
                                            <MenuItem value={'VA'}>VA</MenuItem>
                                            <MenuItem value={'WA'}>WA</MenuItem>
                                            <MenuItem value={'WV'}>WV</MenuItem>
                                            <MenuItem value={'WI'}>WI</MenuItem>
                                            <MenuItem value={'WY'}>WY</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='inputGroup'>
                                <TextField
                                    values={formValues.zip}
                                    onChange={onInputChange}
                                    variant="filled"
                                    name='zip'
                                    label='Zip'
                                    type='text'
                                    className='input'
                                />
                                <TextField
                                    values={formValues.Country}
                                    onChange={onInputChange}
                                    variant="filled"
                                    name='country'
                                    label='Country'
                                    type='text'
                                    className='input'
                                />
                            </div>
                        </div>
                        <div className='formErrors'>
                            <div>{formErrors.firstName}</div>
                            <div>{formErrors.lastName}</div>
                            <div>{formErrors.addressOne}</div>
                            <div>{formErrors.city}</div>
                            <div>{formErrors.state}</div>
                            <div>{formErrors.zip}</div>
                            <div>{formErrors.country}</div>
                        </div>
                        <div>
                            <Button variant="contained" color='primary' onClick={onSubmit}>Submit</Button>
                        </div>
                    </div>
                </FormControl>
            </Card>
        </div>
    )
}

export default Register;