import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearLogs } from './actions';
import { logAction } from "../Logs/actions";
import { logout } from "../Login/actions";

import history from '../../history';
import './style.css';

class Settings extends Component {
    componentDidMount() {
        this.props.logAction('Switched to Settings');
    }

    state = { message: ''}
    handleClearLogs = () => {
        this.props.clearLogs();
        this.setState({message: 'Logs have been cleared!'});
    }
    handleLogout = () => {
        // Current version Git API does not allow to revoke oAuth token, so it will be just state auth status change
        this.props.logout();
        this.props.logAction('Logout');
        history.push('/login');
    }
    render() {
        return (
            <div className="tab-panel-wrapper settings-wrapper">
                <h2>API Settings</h2>
                <div className="buttons-wrapper">
                    <button onClick={this.handleClearLogs}>Clear API logs</button>
                    <button onClick={this.handleLogout}>Logout from API</button>
                    <div className="system-message">{this.state.message}</div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth, logs: state.logs };
}
export default connect(mapStateToProps, {logout, clearLogs, logAction})(Settings);