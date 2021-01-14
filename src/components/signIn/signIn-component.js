import React, { useState } from 'react';
import { connect } from 'react-redux';
import './signIn-component-styles.scss';

import CustomButton from '../customButton/custom-btn-component';
import FormInput from '../form-input/form-input-component';

import { signInWithEmailStart, signInWithGoogleStart } from '../../redux/user/user-actions';

const SignIn = ({ signInWithEmailStart, signInWithGoogleStart }) => {

    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = credentials;

    const handleSubmit = async e => {
        e.preventDefault();
        signInWithEmailStart(email, password);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    required
                    handleChange={handleChange}
                />

                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    required
                    handleChange={handleChange}
                />

                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton
                        type='button'
                        onClick={signInWithGoogleStart}
                        isGoogleSignIn
                    >
                        Sign In With Google
                        </CustomButton>
                </div>
            </form>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    signInWithGoogleStart: () => dispatch(signInWithGoogleStart()),
    signInWithEmailStart: (email, password) => dispatch(signInWithEmailStart({ email, password }))
});


export default connect(null, mapDispatchToProps)(SignIn);