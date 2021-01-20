import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';

import { GlobalStyles } from './global-styles';

import Header from './components/header/header-component';
import Spinner from './components/spinner/spinner-component';
import ErrorBoundary from './components/error-boundary/error-boundary-component';

const HomePage = lazy(() => import('./pages/homepage/homepage-component'));
const ShopPage = lazy(() => import('./pages/shoppage/shoppage-component'));
const SignInAndUpPage = lazy(() => import('./pages/sign-in-up-page/sign-in-page-component'));
const CheckoutPage = lazy(() => import('./pages/checkoutpage/checkout-component'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyles />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() => currentUser ? <Redirect to='/' /> : <SignInAndUpPage />}
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
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


