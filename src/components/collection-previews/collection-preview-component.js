import React from 'react';
import './collection-preview-component-styles.scss';

import CollectionItemCard from '../collection-item-card/collection-item-card-component';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
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

export default CollectionPreview;