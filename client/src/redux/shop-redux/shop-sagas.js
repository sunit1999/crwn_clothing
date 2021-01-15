import { takeLatest, put, call, all } from 'redux-saga/effects';
import { convertCollectionSnapShotToMap, firestore } from '../../firebase/firebase-utils';
import ShopActionTypes from './shop-action-types';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop-actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionSnapShotToMap,
            snapshot
        );

        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest (
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}
