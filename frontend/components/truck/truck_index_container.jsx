import { connect } from 'react-redux';
import TruckIndex from './truck_index';
import * as TRUCK_ACTIONS from '../../actions/truck_actions';
import * as FILTER_ACTIONS from '../../actions/filter_actions';

const mapStateToProps = state => ({
  trucks: state.trucks.trucks
});

const mapDispatchToProps = dispatch => ({
  fetchTrucks: (filters) => dispatch(TRUCK_ACTIONS.fetchTrucks(filters)),
  updateBounds: (bounds) => dispatch(FILTER_ACTIONS.updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TruckIndex);
