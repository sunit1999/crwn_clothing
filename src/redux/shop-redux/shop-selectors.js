import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections? Object.keys(collections).map(key => collections[key]) : []
);

// takes url param and finds the collection id and 
// return a function which gives the whole collection given state is passed into it
export const selectCollection = collectionUrlParam => {
    return createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    )
}
