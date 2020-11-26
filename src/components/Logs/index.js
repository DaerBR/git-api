import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logAction } from '../../store/actions';
import './style.css';

class Logs extends Component {
    componentDidMount() {
        this.props.logAction('Switched to Activity Log');
    }

    render() {
        const { logs } = this.props;
        return (
            <div className="tab-panel-wrapper">
                <h2>User Activity Log</h2>
                <div className="actions-list">
                    {!logs.length && <div>No actions logged yet!</div>}
                    {
                        logs.map((log) => {
                            return (
                                <div className="action-item" key={log.timeStamp}>
                                    <span className="action-type">{log.actionName}</span>
                                    <span className="divider">-</span>
                                    <span className="action-time">{log.time}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { logs: state.logs, }
}

export default connect(mapStateToProps, {logAction})(Logs);