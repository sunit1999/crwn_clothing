import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-preview-component-styles.scss';

import CollectionItemCard from '../collection-item-card/collection-item-card-component';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
    return (
        <div className='collection-preview'>
            <h1
                className='title'
                onClick={() => history.push(`${match.path}/${routeName}`)}
            >
                {title.toUpperCase()}
            </h1>

            <div className='preview'>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) =>
                            <CollectionItemCard key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}

export default withRouter(CollectionPreview);