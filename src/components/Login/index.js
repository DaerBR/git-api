import React, { useState, useEffect, useContext, Component } from 'react';
import { Redirect } from 'react-router-dom';
import GitHubLogin from 'react-github-login';
import { exchangeCodeForToken } from "../../store/actions";
import { connect } from "react-redux";

class Login extends Component {

    successHandler = async response => {
        const { auth } = this.props;
        this.props.exchangeCodeForToken(auth.clientID, auth.clientSecret, response.code);
    };
    errorHandler = response => console.error(response);

    render () {
        if (this.props.auth.isLoggedIn) {
            return <Redirect to='/' />;
        }
        return (
            <div>
                Click here to login via github
                <GitHubLogin clientId={this.props.auth.clientID}
                             onSuccess={this.successHandler}
                             onFailure={this.errorHandler}
                             redirectUri=""
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}
export default connect(mapStateToProps, { exchangeCodeForToken })(Login);
