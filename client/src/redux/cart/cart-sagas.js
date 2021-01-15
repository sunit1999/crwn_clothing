import { takeLatest, all, put, call } from 'redux-saga/effects';
import UserActionTypes from '../user/user-action-types';
import { clearCart } from './cart-actions';

export function* clearCartOnSignout() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}