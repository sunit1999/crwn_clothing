import ShopActionTypes from "./shop-action-types"

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
});

// thunk provides dispatch functionallity
// also, thunk works for functions and not objects
// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());

//         collectionRef.get()
//             .then(snapshot => {
//                 const collectionsMap = convertCollectionSnapShotToMap(snapshot);
//                 dispatch(fetchCollectionsSuccess(collectionsMap));
//             })
//             .catch(error => dispatch(fetchCollectionsFailure(error.message)));
//     }
// };