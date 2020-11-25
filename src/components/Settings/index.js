import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, clearLogs } from "../../store/actions";
import history from "../../history";

class Settings extends Component {
    state = { message: ''}
    handleClearLogs = () => {
        this.props.clearLogs();
        this.setState({message: 'Logs have been cleared!'});
    }
    handleLogout = () => {
        // Current version Git API does not allow to revoke oAuth token, so it will be just state auth status change
        this.props.logout();
        history.push('/login');
    }
    render() {
        return (
            <div className="tab-panel-wrapper settings-wrapper">
                <h2>API Settings</h2>
                <button onClick={this.handleClearLogs}>Clear API logs</button>
                <button onClick={this.handleLogout}>Logout from API</button>
                <div className="system-message">{this.state.message}</div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth, logs: state.logs };
}
export default connect(mapStateToProps, {logout,clearLogs})(Settings);