﻿import React, { Component } from 'react';
import { UserConsumer } from './../contexts/UserContext';
import './Home.css'
import { gitHubService } from '../services/github.service';
import Loading from './../components/_helpers/Loading'
import { Col, Row, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import ErrorMessage from './_helpers/ErrorMessage';
import ResourceIcon from './_helpers/ResourceIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCodeBranch, faTerminal, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LanguageIcon from './_helpers/LanguageIcon';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            repos: {
                loading: true,
                success: false,
                data: null
            },
            starred: {
                loading: true,
                success: false,
                data: null
            }
        }
    }

    componentDidMount(){
        this.getUserRepos()
        this.getStarred()
    }

    async getUserRepos(){
        const data = await gitHubService.getUserRepos()
        const success = data !== null
        const repos = success ? data.filter((el) => el.description !== null && el.description.length > 0) : [];
            this.setState({
                repos: {
                    loading: false,
                    success: success,
                    data: repos
                }
            })
    }

    async getStarred(){
        const data = await gitHubService.getStarred()
        this.setState({
            starred: {
                loading: false,
                success: data !== null,
                data: data
            }
        })
    }

    render(){
        const { repos, starred } = this.state
        return(
            <UserConsumer>
                {({ user }) => (
                <div>
                    <p className="subtitle text-sm text-primary">
                        Welcome
                    </p>
                    <h2 className="mb-4">
                        {!user.loading && user.success && user.data.name !== null
                        ? <span>Hello, I'm {user.data.name.split(' ')[0]}!</span>
                        : <span>Hello, I'm Rob!</span>}
                    </h2>
                    
                    {user.loading
                    ? <Loading message="Loading user, please wait.." />
                    : !repos.success
                        ? <p className="lead text-muted mt-2">Full Stack Web Development with .NET and JavaScript.</p>
                        : <p className="lead text-muted mt-2">{user.data.bio}</p>}
                    <hr />
                    <p className="subtitle text-sm text-primary">
                    Projects
                    </p>
                    <h3 className="mb-4 h4">Repositories</h3>
                    <div className="mb-3">
                        <Row>
                            {repos.loading
                            ? <Loading message="Loading repos, please wait.." />
                            : !repos.success
                            ? <Col>
                                <ErrorMessage message="Could not load repos" />
                            </Col>
                            : repos.data.map((r, index) =>
                            <Col md="4" key={r.name} className="mb-5">
                                <div className="h-100 d-flex flex-column">
                                    
                                    <Link className="d-block lead border-bottom text-primary text-decoration-none hover-animate mb-3" 
                                    to={'/repo/:name'.replace(':name', r.name)}>
                                        <LanguageIcon className="bd-placeholder-img mb-2 mr-2 rounded" language={r.language} />
                                            &nbsp;
                                            <span className="sr-only">See repo information about {r.name}</span>
                                            {r.name}
                                    </Link>
                                        <p className="pb-1 mb-2 small lh-125 text-muted">
                                            {r.description}
                                        </p>
                                    </div>
                            </Col>)}
                        </Row>
                    </div>
                    <hr />
                    <p className="subtitle text-sm text-primary">
                    Tools
                    </p>
                    <h3 className="mb-4 h4">
                    Resources
                    </h3>
                    <div className="mb-3">
                    <div className="card-columns">
                            {starred.loading
                            ? <Loading message="Loading tools, please wait.." />
                            : !starred.success
                            ? <Card>
                                <ErrorMessage message="Could not load tools." />
                            </Card>
                            : starred.data.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at))
                            .map((r, index) =>
                            <Card key={r.name}>
                                <CardBody>                                
                                    <p className="small border-bottom">
                                        <ResourceIcon className="bd-placeholder-img mb-2 mr-2 rounded" resource={r.name} language={r.language} />
                                        {r.name} 
                                    </p>
                                    <p className="pb-1 mb-2 small lh-125 text-muted">
                                        {r.description}
                                    </p>                         
                                    <div className="mt-auto text-right">
                                        <a target="_blank" 
                                        href={r.html_url} 
                                        rel="noopener noreferrer">
                                            <span className="sr-only">See {r.name} on GitHub.com</span>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </a>
                                    </div>
                                </CardBody>
                            </Card>)}
                        </div>
                    </div>
                </div>
                )}
            </UserConsumer>
        )
    }
}