import React, { Component } from "react";
import { connect } from "react-redux";

class Logs extends Component {
    render() {
        return (
            <div className="tab-panel-wrapper">
                <h2>User recent actions log</h2>
                <div className="actions-list">

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { logs: state.logs, }
}

export default connect(mapStateToProps)(Logs);