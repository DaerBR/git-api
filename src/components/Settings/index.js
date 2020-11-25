import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions";


class Settings extends Component {
    handleClearLogs = () => {

    }
    handleLogout = () => {

    }
    render() {
        return (
            <div>
                <button onClick={this.handleClearLogs}>Clean logs</button>
                <button onClick={this.handleLogout}>Logout from Git</button>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
}
export default connect(mapStateToProps(logout))(Settings);