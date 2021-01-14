import React, { Component } from 'react';
import { connect } from 'react-redux';
import './signIn-component-styles.scss';

import CustomButton from '../customButton/custom-btn-component';
import FormInput from '../form-input/form-input-component';

import { signInWithEmailStart, signInWithGoogleStart } from '../../redux/user/user-actions';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { signInWithEmailStart } = this.props;
        const { email, password } = this.state;

        signInWithEmailStart(email, password);
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { signInWithGoogleStart } = this.props;
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
    signInWithGoogleStart: () => dispatch(signInWithGoogleStart()),
    signInWithEmailStart: (email, password) => dispatch(signInWithEmailStart({email, password}))
});


export default connect(null, mapDispatchToProps)(SignIn);