import React, { Component } from 'react';
import './signUp-component-styles.scss';

import FormInput from '../form-input/form-input-component';
import CustomButton from '../customButton/custom-btn-component';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            // on succesfull registration, reset the state
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (err) {
            console.error(err);
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Name'
                        required
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        required
                        onChange={this.handleChange}
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        required
                        onChange={this.handleChange}
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        required
                        onChange={this.handleChange}
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;