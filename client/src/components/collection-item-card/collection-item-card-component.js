import React from 'react';
import { connect } from 'react-redux';

import './collection-item-card-styles.scss';
import CustomButton from '../customButton/custom-btn-component';
import { addItem } from '../../redux/cart/cart-actions';

const CollectionItemCard = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{ backgroundImage: `url(${imageUrl}` }}
            />

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>

            <CustomButton onClick={() => addItem(item)} invertColor>
                ADD TO CART
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItemCard);