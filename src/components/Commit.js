import React, { Component } from 'react';
import { gitHubService } from '../services/github.service';
import Loading from './_helpers/Loading';
import UnDraw from './_helpers/UnDraw';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faMinus, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { ListGroup } from 'reactstrap';
import FileChangeStatus from './_helpers/FileChangeStatus';

export default class Commit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.match.params.name,
            sha: this.props.match.params.sha,
            commit: {
                loading: true,
                success: false,
                data: null
            }
        };
    }

    componentDidMount(){
        document.title = `Rob Smitha - Commit ${this.state.sha}`
        this.getCommit()
    }
    
    async getCommit(){
        const { name, sha } = this.state
        const data = await gitHubService.getCommit(name, sha)
        this.setState({
            commit: {
                loading: false,
                success: data !== null,
                data: data
            }
        })
    }

    render(){
        const {commit, name, sha} = this.state
        return(
            <div className="h-100">
                <div className="mb-4">
                    <Link to={'/'}>Home</Link>&nbsp;&minus;&nbsp;
                    <Link to={'/repo/:name'.replace(':name', name)}>{name}</Link>&nbsp;&minus;&nbsp;
                    <span className="text-break" aria-hidden="true">
                        <span className="sr-only">Commit sha</span>
                        {sha}
                    </span>
                </div>
                <div className="mb-3">
                <p className="subtitle text-sm text-primary">
                Commit
                </p>
                {commit.loading
                ? <Loading message="Loading commit, please wait.." />
                : !commit.success
                ? <div>
                    <h2 className="d-block mb-4">
                    {name} - {sha}
                    </h2>
                    <UnDraw icon="undraw_not_found_60pq" />
                    <p className="lead mt-2">
                    Could not load the commit.
                    </p>
                </div>
                : <div>
                    <h2 className="d-block mb-4">
                        Message
                    </h2>

                    <blockquote className="blockquote" aria-labelledby="commit-label" aria-describedby="commit-message">
                        <p id="commit-message" className="mb-0 lead">{commit.data.commit.message}</p>
                        <div id="commit-label" className="blockquote-footer">
                            {commit.data.commit.committer.name}<span className="sr-only">commit message</span> on&nbsp;
                            <cite>{new Date(commit.data.commit.committer.date).toLocaleString()}</cite>
                        </div>
                    </blockquote>
                    <hr />
                    <p className="subtitle text-sm text-primary">
                        Stats
                    </p>
                    <h2 className="d-block mb-4">
                        Changes
                    </h2>
                    <div aria-labelledby="commit-statistics">
                        <p className="lead mt-2" id="commit-statistics">
                            Showing <strong>{commit.data.files.length} changed files </strong> 
                            with <strong className="text-success">{commit.data.stats.additions} additions </strong> 
                            and <strong className="text-danger">{commit.data.stats.deletions} deletions.</strong>
                        </p>
                    </div>
                    <ListGroup flush>
                        {commit.data.files.map((f, index) =>
                        <a target="_blank" rel="norefeffer noopener" href={f.blob_url} className="list-group-item list-group-item-action px-1" key={index}
                        aria-labeledby={'file-name-'.concat(index)} aria-describedby={'file-changes-'.concat(index)}>
                            <span className="d-block">
                                <small className="text-nowrap"><FontAwesomeIcon icon={faFileCode} />&nbsp;</small>
                                <span className="text-break">{f.filename}</span>
                            </span>
                            <div id={'file-changes-'.concat(index)}>
                                <FileChangeStatus status={f.status} />&nbsp;
                                <span className="text-success">
                                    <FontAwesomeIcon icon={faPlus} />&nbsp;{f.additions}&nbsp;
                                    <span className="sr-only">additions</span>
                                </span>
                                <span className="text-danger">
                                    <FontAwesomeIcon icon={faMinus} />&nbsp;{f.deletions}
                                    <span className="sr-only">deletions</span>
                                </span>
                            </div>
                        </a>
                        )}
                        <a href={commit.data.html_url} className="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />&nbsp;See full commit on GitHub
                        </a>
                    </ListGroup>
                </div>}
                </div>
            </div>     
            )
    }
    
}