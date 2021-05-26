import * as yup from 'yup';

const RegistrationSchema = yup.object().shape({
    firstName: yup.string()
        .trim()
        .min(2, "Please enter your first name")
        .required('First name is a required field'),
    lastName: yup.string()
        .trim()
        .min(2, 'Please enter your last name')
        .required('Last name is a required field'),
    addressOne: yup.string()
        .trim()
        .min(3, 'Please enter a valid address')
        .required('Address is a requied field'),
    addressTwo: yup.string(),
    city: yup.string()
        .required('City is a required field'),
    state: yup.string()
        .required('State is a required field, please select your state'),
    zip: yup.string()
        .required('Zip code is a required field'),
    country: yup.string()
        .required('Country is a required field')
})

export default RegistrationSchema;