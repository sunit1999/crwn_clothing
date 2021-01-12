import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import { updateCollections } from '../../redux/shop-redux/shop-actions';
import CollectionPage from '../collectionpage/collection-component.js';
import CollectionOverview from '../../components/collection-overview/collection-overview-component.js';

import { convertCollectionSnapShotToMap, firestore } from '../../firebase/firebase-utils.js';
import { WithSpinner } from '../../components/with-spinner/with-spinner-component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

    state = {
        isLoading: true
    }

    unsubscribeFromSnapShot = null;

    // get data from backend and convert to required from
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        this.unsubscribeFromSnapShot = collectionRef.onSnapshot(snapshot => {
            const collectionsMap = convertCollectionSnapShotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ isLoading: false });
        })
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    render={props => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />}
                />
                <Route exact path={`${match.path}/:collectionId`}
                    render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);