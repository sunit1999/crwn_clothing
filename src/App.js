import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage-component';
import Header from './components/header/header-component';
import ShopPage from './pages/shoppage/shoppage-component';
import SignInAndUpPage from './pages/sign-in-up-page/sign-in-page-component';
import CheckoutPage from './pages/checkoutpage/checkout-component';

import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';

class App extends Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
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
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


