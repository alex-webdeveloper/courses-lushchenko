import { connect } from "react-redux";
import List from '../components/List';

function mapStateToProps(state) {
    const { user } = state;
    return { users: user };
}

export default connect(
    mapStateToProps,
    null
)(List);