import { connect } from 'react-redux';
import SearchForm from './search_form';
import * as FILTER_ACTIONS from '../../actions/filter_actions';

const mapStateToProps = state => ({
  hours: state.filters.hours,
  days: state.filters.days,
  food: state.filters.food
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => {dispatch(FILTER_ACTIONS.updateFilter(filter, value))},
  updateFilterStore: (filter, value) => {dispatch(FILTER_ACTIONS.updateFilterStore(filter,value))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
