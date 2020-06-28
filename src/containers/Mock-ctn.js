import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autoLogin} from '../actions/mockAction';

class MockCtn extends React.Component {
    render() {
        return <div>Mock</div>
    }
}

const mapStateToProps = (state) => {
    return ({
        jwt: state.JWT,
        checkings: state.checkings,
        savings: state.savings,
        cds: state.cds
    })
}

const maptDispatchToProps = (dispatch) => () => {
    return ({
        autoLogin: bindActionCreators(autoLogin, dispatch)
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(mapMockCtn);