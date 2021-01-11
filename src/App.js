import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage-component';
import Header from './components/header/header-component';
import ShopPage from './pages/shoppage/shoppage-component';
import SignInAndUpPage from './pages/sign-in-up-page/sign-in-page-component';
import CheckoutPage from './pages/checkoutpage/checkout-component';

import { auth, createUserProfileDocument } from './firebase/firebase-utils';

import setCurrentUser from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selectors';

class App extends Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { updateUserState } = this.props;
    // console.log(setCurrentUser);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if user signed out, set the state to null
      if (!userAuth) updateUserState(userAuth);
      else {
        // if user logged in, store his data in databse and get its refrence in the docuemnt
        const userRef = await createUserProfileDocument(userAuth);
        // then using this reference, set the state of our class
        userRef.onSnapshot(snapshot => {
          updateUserState({
              id: snapshot.id,
              ...snapshot.data()
          });
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
            render={() => this.props.currentUser
              ? <Redirect to='/' />
              : <SignInAndUpPage />
            }
          />
        </Switch>
      </div>
    )
  }
}

// to get the current user
// helps in redirect
const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
});

// dispath() helps in setting new user state.
// everytime user state changes, updateUserState is passed to App as props
const mapDispatchToProps = dispatch => ({
  updateUserState : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


