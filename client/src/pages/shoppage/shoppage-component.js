import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import { fetchCollectionsStart } from '../../redux/shop-redux/shop-actions';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview-container';
import ColletionPageContainer from '../collectionpage/collection-page-container';

const ShopPage = ({ fetchCollectionsStart, match }) => {

    // get data from backend and convert to required from
    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart])


    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
                component={CollectionOverviewContainer}
            />
            <Route exact path={`${match.path}/:collectionId`}
                component={ColletionPageContainer}
            />
        </div>
    )
}



// fires the async action
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);