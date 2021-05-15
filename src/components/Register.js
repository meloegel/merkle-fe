import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import * as yup from 'yup';

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

const initialDisabled = true;


function Register() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const onSubmit = (evt) => {

    }

    const onInputChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit} disabled={disabled}>
                <div>
                    <h1>Reg</h1>
                    <div>
                        <input
                            values={formValues.firstName}
                            name='firstName'
                            label='First Name'
                            type='text'
                        />
                        <input
                            values={formValues.lastName}
                            name='lastName'
                            label='Last Name'
                            type='text'
                        />
                        <input
                            values={formValues.addressOne}
                            name='addressOne'
                            label='Address'
                            type='text'
                        />
                        <input
                            values={formValues.addressTwo}
                            name='addressTwo'
                            label='Address Cont.'
                            type='text'
                        />
                        <input
                            values={formValues.city}
                            name='city'
                            label='City'
                            type='text'
                        />
                        <InputLabel>State</InputLabel>
                        <Select
                            labelId='State'
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
                        <input
                            values={formValues.zip}
                            name='zip'
                            label='Zip'
                            type='text'
                        />
                        <input
                            values={formValues.Country}
                            name='country'
                            label='Country'
                            type='text'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;