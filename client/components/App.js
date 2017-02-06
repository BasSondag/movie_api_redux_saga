import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actoins/actionCreators';
import Main from './Main';

function mapStatetoProps(state) {
	return {

	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStatetoProps, mapDispatchToProps)(Main);

export default App;
