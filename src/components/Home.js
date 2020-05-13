﻿import React, { Component } from 'react';
import { UserConsumer } from './../contexts/UserContext';
import './Home.css'
import { gitHubService } from '../services/github.service';
import Loading from './../components/_helpers/Loading'
import { Card, Col, CardBody, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import ErrorMessage from './_helpers/ErrorMessage';
import LanguageIcon from './_helpers/LanguageIcon';
import ResourceIcon from './_helpers/ResourceIcon';

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
        console.log(data)
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
                        {!user.loading && user.success
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
                            <Col md="4" key={r.name} className="mb-4 hover-animate">
                                <Link className="text-decoration-none" to={'/repo/:name'.replace(':name', r.name)}>
                                    <Card className="h-100 text-center shadow border-0">
                                        <CardBody>
                                            <LanguageIcon className="bd-placeholder-img mb-2 mr-2 rounded" language={r.language} />
                                            <strong className="text-gray-dark">{r.name}</strong>
                                            <p className="pb-3 mb-0 small lh-125 text-muted">
                                                {r.description}
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Link>
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
                        <Row>
                            {starred.loading
                            ? <Loading message="Loading tools, please wait.." />
                            : !starred.success
                            ? <Col>
                                <ErrorMessage message="Could not load tools." />
                            </Col>
                            : starred.data.map((r, index) =>
                            <Col xs="6" sm="auto" key={r.name} className="mb-4 text-center">
                                <a target="_blank" href={r.html_url} rel="noopener noreferrer" className="text-muted">
                                    <ResourceIcon className="bd-placeholder-img mb-2 rounded" resource={r.name} language={r.language} />
                                    <small className="d-block text-gray-dark">{r.name}</small>
                                </a>
                            </Col>)}
                        </Row>
                    </div>
                </div>
                )}
            </UserConsumer>
        )
    }
}