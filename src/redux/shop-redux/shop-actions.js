import ShopActionTypes from "./shop-action-types"

export const updateCollections = collections => ({
    type: ShopActionTypes.CONVERT_COLLECTION_TO_MAP,
    payload: collections
});