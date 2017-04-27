import { connect } from 'react-redux';
import TruckMap from './truck_map';

const mapStateToProps = state => ({
  trucks: state.trucks.trucks
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TruckMap);
