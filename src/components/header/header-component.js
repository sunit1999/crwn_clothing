import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header-component-styles.scss';

import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase-utils';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';

// destructure the props passed from mapStateToProps
const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>

            <Link className='link-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {   // check if a user is logged in
                    currentUser
                        ? (<div
                            className='option'
                            onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>)
                        : (<Link className='option' to='/signin'>
                            SIGN IN
                        </Link>)
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown />}
        </div>
    );
}

// connect() automatically gets the state from the store.
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
