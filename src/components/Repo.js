﻿import React, { Component } from 'react';
import { gitHubService } from '../services/github.service';
import { Col, Row, ListGroup } from 'reactstrap';
import Loading from './_helpers/Loading';
import Devicon from './_helpers/Devicon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ErrorMessage from './_helpers/ErrorMessage';

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

        const dates = data.reduce((groups, group) => {
            const date = group.commit.committer.date.split('T')[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(group);
            return groups;
        }, {});

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
                : <div>
                    <h2 className="d-block mb-4">
                        {repo.data.name}
                    </h2>
                    <p className="lead mt-2">
                        {repo.data.description}
                    </p>
                    <a href={repo.data.html_url} type="button" className="btn btn-light" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />&nbsp;Continue to GiHub
                    </a>
                    <hr />

                </div>}
                </div>
                <div className="mb-3">
                    <p className="subtitle text-sm text-primary">
                        Languages
                    </p>
                    <h3 className="d-block mb-4">Breakdown</h3>
                {languages.loading 
                 ? <Loading message="Loading languages, please wait.." />
                : !languages.success 
                ?  <ErrorMessage message="Could not load languages." />
                : <div>
                    <Row>
                        {Object.keys(languages.data).map(l => 
                        <Col key={l} className="mb-3 text-md-left text-center">
                            <Devicon className="bd-placeholder-img mb-2 mr-2 rounded" language={l} />
                            <small className="text-muted lead">{languages.data[l]}</small>
                        </Col>)}
                    </Row>
                </div>}
                </div>
                <hr />

                <div className="mb-3">
                    <p className="subtitle text-sm text-primary">
                        Commits
                    </p>
                    <h3 className="d-block mb-4">Activity</h3>
                {commits.loading 
                 ? <Loading message="Loading commits, please wait.." />
                : !commits.success 
                ? <ErrorMessage message="Could not load commits." />
                : <div>
                    <div className="commits-listing commits-listing-padded">
                        {commits.data.map(c => 
                        <div key={c.date}>
                            <div className="commit-group-title">
                                <FontAwesomeIcon className="git-commit" icon={faLaptopCode} />
                                <small>{new Date(c.date).toDateString()}</small>
                            </div>
                            <div className="commit-group pb-3 mb-0 small lh-125">
                                <ListGroup>
                                    {c.commits.map(gc => 
                                        <Link key={gc.sha} className="list-group-item list-group-item-action" to={'/repo/:name/commit/:sha'.replace(':name', repo.data.name).replace(':sha', gc.sha)}>
                                            <div className="media">
                                                <img src={gc.author.avatar_url} className="bd-placeholder-img mb-2 mr-2 rounded" />&nbsp;
                                                <div className="media-body">
                                                    <blockquote className="blockquote">
                                                        <small className="d-block mb-2 text-break">
                                                            {gc.commit.message}
                                                        </small>
                                                        <div className="blockquote-footer small">
                                                            {gc.author.login} on&nbsp;
                                                            <cite title="Commited on">{new Date(gc.commit.author.date).toLocaleTimeString()}</cite>
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