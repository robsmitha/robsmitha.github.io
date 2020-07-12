﻿import React, { Component } from 'react';
import { gitHubService } from '../services/github.service';
import { Col, Row, ListGroup } from 'reactstrap';
import Loading from './_helpers/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ErrorMessage from './_helpers/ErrorMessage';
import LanguageIcon from './_helpers/LanguageIcon';

export default class Repo extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.match.params.name,
            repo: {
                loading: true,
                success: false,
                data: null
            },
            commits: {
                loading: true,
                success: false,
                data: null
            },
            languages: {
                loading: true,
                success: false,
                data: null
            }
        }
    }

    componentDidMount(){
        this.getRepo()
        this.getLanguages()
        this.getCommits()
    }

    async getRepo(){
        const data = await gitHubService.getRepo(this.state.name)
        if(data){
            document.title = `Rob Smitha - ${data.name}`
        }
        this.setState({
            repo: {
                loading: false,
                success: data !== null,
                data: data
            }
        })
    }

    async getCommits(){
        const data = await gitHubService.getCommits(this.state.name)

        const dates = data !== null ? data.reduce((groups, group) => {
            const date = group.commit.committer.date.split('T')[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(group);
            return groups;
        }, {}) 
        : [];

        const commits = Object.keys(dates).map((date) => {
            return {
            date,
            commits: dates[date]
            };
        });

        this.setState({
            commits: {
                loading: false,
                success: commits !== null,
                data: commits
            }
        })
    }

    async getLanguages(){
        const data = await gitHubService.getLanguages(this.state.name)
        this.setState({
            languages: {
                loading: false,
                success: data !== null,
                data: data
            }
        })
    }

    render(){
        const { repo, name, languages, commits } = this.state
        return(
            <div>
                
                <div className="mb-4">
                    <Link to={'/'}>Home</Link> &minus; {repo.data !== null ? repo.data.name : name}
                </div>
                <div className="mb-3">
                    <p className="subtitle text-sm text-primary">
                        Repository
                    </p>
                    {repo.loading
                    ? <Loading message="Loading repo, please wait.." />
                    : !repo.success
                    ? <ErrorMessage message="Could not load repo." />
                    : <div aria-labelledby="repository-name" aria-describedby="repository-description">
                        <h2 id="repository-name" className="d-block mb-4">
                            {repo.data.name}
                        </h2>
                        <p id="repository-description" className="lead mt-2">
                            {repo.data.description}
                        </p>
                        <Row>
                        {repo.data.homepage !== null && repo.data.homepage.length > 0 ? 
                            <Col xs="12" sm="6">
                                <a className="btn btn-dark btn-block mb-3" href={repo.data.homepage} target="_blank" rel="noopener noreferrer" >
                                    <FontAwesomeIcon className="text-success" icon={faPlay} />&nbsp;{repo.data.name}
                                </a> 
                            </Col>
                            : ''}
                            <Col xs="12" sm="6">
                                <a href={repo.data.html_url} className="btn btn-light btn-block" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />&nbsp;Continue to GitHub
                                </a>
                            </Col>
                        </Row>
                        <hr />
                    </div>}
                </div>
                <div className="mb-3" aria-labelledby="languages">
                    <p id="languages" className="subtitle text-sm text-primary">
                        Languages
                    </p>
                    <h3 className="d-block mb-4">Breakdown</h3>
                    {languages.loading 
                    ? <Loading message="Loading languages, please wait.." />
                    : !languages.success 
                    ?  <ErrorMessage message="Could not load languages." />
                    : <div>
                        <Row>
                            {Object.keys(languages.data).map((l, index) => 
                            <Col key={l} className="mb-3 text-md-left text-center">
                                <LanguageIcon className="bd-placeholder-img mb-2 mr-2 rounded" language={l} />
                                <span aria-labelledby={'lines-of-code-label'.concat(index)} aria-describedby={'lines-of-code-count'.concat(index)}>
                                    <span id={'lines-of-code-label'.concat(index)} className="sr-only">{'Lines of '.concat(l, ' code')}</span>
                                    <small id={'lines-of-code-count'.concat(index)} className="text-muted lead">{languages.data[l]}</small>
                                </span>
                            </Col>)}
                        </Row>
                    </div>}
                </div>
                <hr />

                <div className="mb-3" aria-labelledby="commit-activity-label">
                    <p className="subtitle text-sm text-primary">
                        Commits
                    </p>
                    <h3 id="commit-activity-label" className="d-block mb-4">
                        <span className="sr-only">Recent Commit</span>
                        Activity
                    </h3>
                {commits.loading 
                 ? <Loading message="Loading commits, please wait.." />
                : !commits.success 
                ? <ErrorMessage message="Could not load commits." />
                : <div>
                    <div className="commits-listing commits-listing-padded">
                        {commits.data.map((c, index) => 
                        <div key={c.date}>
                            <div className="commit-group-title" aria-labelledby={'commit-group-'.concat(index)}>
                                <FontAwesomeIcon className="git-commit" icon={faLaptopCode} />
                                <small id={'commit-group-'.concat(index)}>
                                    <span className="sr-only">Commits on</span>
                                    {new Date(c.date).toDateString()}
                                </small>
                            </div>
                            <div className="commit-group pb-3 mb-0 small lh-125">
                                <ListGroup>
                                    {c.commits.map((gc, index) => 
                                        <Link key={gc.sha} className="list-group-item list-group-item-action" 
                                        to={'/repo/:name/commit/:sha'.replace(':name', name).replace(':sha', gc.sha)}>
                                            <div className="media">
                                                <img alt={'' /*gc.author !== null ? gc.author.login.concat(' avatar') : gc.committer !== null ? gc.committer.login.concat(' avatar') : 'Author avatar'*/} 
                                                src={gc.author !== null ? gc.author.avatar_url : gc.committer !== null ? gc.committer.avatar_url : ''} 
                                                className="bd-placeholder-img mb-2 mr-2 rounded" />&nbsp;
                                                <div className="media-body" aria-labelledby={'commit-label-'.concat(index)} aria-describedby={'commit-message-'.concat(index)}>
                                                    <blockquote className="blockquote">
                                                        <small id={'commit-message-'.concat(index)} className="d-block mb-2 text-break">
                                                            {gc.commit.message}
                                                        </small>
                                                        <div className="blockquote-footer small" id={'commit-label-'.concat(index)}>
                                                            {gc.author.login}<span className="sr-only">commit message</span> on&nbsp;
                                                            <cite>{new Date(gc.commit.author.date).toLocaleTimeString()}</cite>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </Link>
                                        )}
                                </ListGroup>
                            </div>
                        </div>)}
                    </div>
                </div>}
                </div>
            </div>
        )
    }
}