import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import GitHubLogin from 'react-github-login';
import { exchangeCodeForToken, logAction } from '../../store/actions';
import { connect } from 'react-redux';
import './style.css';

class Login extends Component {
    successHandler = async response => {
        const { auth } = this.props;
        this.props.exchangeCodeForToken(auth.clientID, auth.clientSecret, response.code);
        this.props.logAction('Login');
    };
    errorHandler = response => console.error(response);

    render () {
        if (this.props.auth.isLoggedIn && this.props.auth.userToken) {
            return <Redirect to='/' />;
        }
        return (
            <div className="login-block-wrapper">
                <div className="login-block">
                    <div className="login-text">To use this API you must login via GitHub. Click here to proceed.</div>
                    <GitHubLogin clientId={this.props.auth.clientID}
                                 onSuccess={this.successHandler}
                                 onFailure={this.errorHandler}
                                 redirectUri=""
                                 buttonText="Login now"
                    />
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return { auth: state.auth, logs: state.logs }
}
export default connect(mapStateToProps, { exchangeCodeForToken, logAction })(Login);
