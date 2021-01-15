import React from 'react';
import './custom-btn-component-styles.scss'

const CustomButton = ({children, isGoogleSignIn, invertColor, ...otherProps}) => {
    return (
        <button
            className={`
            ${invertColor ? 'invert' : ''} 
            ${isGoogleSignIn ? 'google-sign-in' : ''} 
            custom-button`}
            {...otherProps}
        >
            {children}
        </button>
     );
}
 
export default CustomButton;