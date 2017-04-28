import { connect } from 'react-redux';
import TruckIndex from './truck_index';

const mapStateToProps = state => ({
  trucks: state.trucks.trucks
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TruckIndex);
