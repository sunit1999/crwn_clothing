import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './directory-component-styles.scss';

import { selectDirectorySections } from '../../redux/directory-redux/directory-selectors';
import MenuItem from '../menuitem/menuitem';

const Directory = ({sections}) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherSectionProps }) =>
                    <MenuItem key={id} {...otherSectionProps} />
                )
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);