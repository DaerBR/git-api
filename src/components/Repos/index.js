import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchReposData } from "../../store/actions";
import { reposDataSelect } from "../../store/selectors";

class Repos extends Component {
    componentDidMount() {
        this.props.fetchReposData(this.props.token);
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
                    {reposData.map((repo) => {
                        return (
                            <div className="repo-item" key={repo.name}>
                                <div className="repo-stat-line"><a target="_blank" rel="noreferrer" href={repo.url}>{repo.name}</a></div>
                                <div className="repo-stat-line">
                                    <div className="short-item"><span className="repo-stat-name">Language:</span>{repo.language}</div>
                                    <div className="short-item"><span className="repo-stat-name">Type:</span>{repo.isPrivate ? 'Private' : 'Public'}</div>
                                </div>
                                <div className="repo-stat-line">
                                    <div className="short-item"><span className="repo-stat-name">Default branch:</span><a target="_blank" rel="noreferrer" href={repo.url}>{repo.defaultBranch}</a></div>
                                    <div className="short-item"><span className="repo-stat-name">Latest update:</span>{repo.latestUpdate}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { token: state.auth.userToken, reposData: reposDataSelect(state.reposData)}
}

export default connect(mapStateToProps,{fetchReposData})(Repos);