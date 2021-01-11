import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview-component-styles.scss';

import CollectionPreview from '../collection-previews/collection-preview-component';
import { selectCollectionsForPreview } from '../../redux/shop-redux/shop-selectors';

const CollectionOverview = ({collections}) => {
    return ( 
        <div className='collection-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) =>
                    <CollectionPreview key={id} {...otherCollectionProps} />)
            }
        </div>
     );
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);