import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from "../../store/actions";

class Profile extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchUserData(this.props.token);
    }

    render() {
        return (
            <div>Profile</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { token: state.auth.userToken }
}

export default connect(mapStateToProps, {fetchUserData})(Profile);