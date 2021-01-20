import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop-redux/shop-actions';
import Spinner from '../../components/spinner/spinner-component';

const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview-container'));
const ColletionPageContainer = lazy(() => import('../collectionpage/collection-page-container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {

    // get data from backend and convert to required from
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])


    return (
        <div className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverviewContainer}
                />
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    component={ColletionPageContainer}
                />
            </Suspense>
        </div>
    )
}



// fires the async action
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);