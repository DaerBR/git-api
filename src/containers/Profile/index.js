import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { fetchUserData } from './actions';
import { logAction } from "../Logs/actions";

class Profile extends Component {

    componentDidMount() {
        this.props.fetchUserData(this.props.token);
        this.props.logAction('Switched to Profile');
    }

    render() {
        const { userData } = this.props;

        if (userData.length === 0) {
            return <div>Loading...</div>
        }
        return (
            <div className="profile-wrapper">
                <h2><a target="_blank" rel="noreferrer" href={userData.profileUrl}>{userData.login} GitHub User Profile</a></h2>
                <div className="profile-content">
                    <div className="avatar-wrapper"><img src={userData.imgUrl} alt={userData.login} /></div>
                    <div className="profile-info">
                        <div className="profile-item"><span className="profile-item-name">Name:</span>{userData.name}</div>
                        <div className="profile-item"><span className="profile-item-name">Email:</span>{userData.email}</div>
                        {userData.company && <div className="profile-item"><span className="profile-item-name">Company:</span>{userData.company}</div>}
                        {userData.location && <div className="profile-item"><span className="profile-item-name">Location:</span>{userData.location}</div>}
                        {userData.bio && <div className="profile-item"><span className="profile-item-name">Bio:</span>{userData.bio}</div>}
                        <div className="profile-item"><span className="profile-item-name">Public repositories:</span>{userData.puplicReposNumber}</div>
                        <div className="profile-item"><span className="profile-item-name">Number of followers:</span>{userData.followers}</div>
                        <div className="profile-item"><span className="profile-item-name">Following:</span>{userData.following}</div>
                        <div className="profile-item"><span className="profile-item-name">Profile created:</span>{userData.created}</div>
                        <div className="profile-item"><span className="profile-item-name">Latest update:</span>{userData.latestUpdate}</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { token: state.auth.userToken, userData: state.userData, logs: state.logs }
}

export default connect(mapStateToProps, {fetchUserData, logAction})(Profile);
