import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReposData, fetchRepoDetails } from './actions';
import { logAction } from "../Logs/actions";
import './styles.css';

class Repos extends Component {
    componentDidMount() {
        this.props.fetchReposData(this.props.token);
        this.props.logAction('Switched to Repositories');
    }

    handleFetchMoreDetails(ownerLogin, name, index) {
        this.props.fetchRepoDetails(ownerLogin, name, index);
        this.props.logAction(`Expanded details for repo ${name}`)
    }

    render() {
        const { reposData } = this.props;

        if (reposData.length === 0) {
            return <div>Loading...</div>
        }
        return (
            <div className="repos-wrapper tab-panel-wrapper">
                <h2><a href={reposData[0].ownerURL}>{reposData[0].ownerLogin} GitHub Repositories list</a></h2>
                <div className="repos-list">
                    {reposData.map((repo, index) => {
                        return (
                            <div className="repo-item" key={index}>
                                <div className="repo-stat-line repo-name"><a target="_blank" rel="noreferrer" href={repo.url}>{repo.name}</a></div>
                                <div className="repo-stat-line">
                                    <div className="short-item"><span className="repo-stat-name">Language:</span>{repo.language}</div>
                                    <div className="short-item"><span className="repo-stat-name">Type:</span>{repo.isPrivate ? 'Private' : 'Public'}</div>
                                </div>
                                <div className="repo-stat-line">
                                    <div className="short-item"><span className="repo-stat-name">Default branch:</span><a target="_blank" rel="noreferrer" href={repo.url}>{repo.defaultBranch}</a></div>
                                    <div className="short-item"><span className="repo-stat-name">Latest update:</span>{repo.latestUpdate}</div>
                                </div>
                                {!repo.details && <button onClick={() => {this.handleFetchMoreDetails(repo.ownerLogin, repo.name, index)}}>See details</button> }
                                {repo.details &&
                                <div className="repo-details">
                                    <div className="branches-list">
                                        <div className="repo-stat-name">Branches:</div>
                                        {repo.details.branches.map((branch)=>{
                                            return (
                                                <div className="branch-item" key={branch.name}>
                                                    <span>{branch.name}</span>
                                                    {repo.defaultBranch === branch.name && <span className="is-default">Default branch</span>}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div><span className="repo-stat-name">Total commits:</span> {repo.details.totalCommits}</div>
                                </div>}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { token: state.auth.userToken, reposData: state.reposData, logs: state.logs}
}

export default connect(mapStateToProps,{fetchReposData, logAction, fetchRepoDetails})(Repos);