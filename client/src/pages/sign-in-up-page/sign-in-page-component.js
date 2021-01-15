import React from 'react';
import './sign-in-page-component-styles.scss';

import SignIn from '../../components/signIn/signIn-component';
import SignUp from '../../components/signUp/signUp-component';

const SignInAndUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
     );
}
 
export default SignInAndUpPage;