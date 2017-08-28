import { connect } from 'react-redux';
import TruckIndex from './truck_index';
import * as TRUCK_ACTIONS from '../../actions/truck_actions';

const mapStateToProps = state => ({
  trucks: state.trucks.trucks,
  focus: state.trucks.focus,
  food: state.filters.food
});

const mapDispatchToProps = dispatch => ({
  clearFocus: () => dispatch(TRUCK_ACTIONS.clearFocus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TruckIndex);
