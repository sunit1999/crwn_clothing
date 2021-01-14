import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { WithSpinner } from "../../components/with-spinner/with-spinner-component";
import { selectIsCollectionLoaded } from "../../redux/shop-redux/shop-selectors";
import CollectionPage from './collection-component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const ColletionPageContainer = compose(
    connect(mapStateToProps), WithSpinner
)(CollectionPage);

export default ColletionPageContainer;