import React, { useState } from 'react';
import { connect } from 'react-redux';
import './signUp-component-styles.scss';

import FormInput from '../form-input/form-input-component';
import CustomButton from '../customButton/custom-btn-component';
import { signUpStart } from '../../redux/user/user-actions';

const SignUp = ({ signUpStart }) => {

    const [details, setDetails] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = details;

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ email, password, displayName })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    }


    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Name'
                    required
                    onChange={handleChange}
                />

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    label='Email'
                    required
                    onChange={handleChange}
                />

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    required
                    onChange={handleChange}
                />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm Password'
                    required
                    onChange={handleChange}
                />

                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);