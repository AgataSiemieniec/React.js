import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { getSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props)=> ({
  cards: getSearchResults(state, props.match.params.id),
});


export default connect(mapStateToProps)(SearchResults);