import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Badge, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faExternalLinkAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { UserConsumer } from '../../contexts/UserContext';

export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header>
                <UserConsumer>
                    {({ user }) => (
                        <Card className="border-0 mb-5 mb-lg-0">
                        <CardHeader className="bg-white py-4 border-0 text-center">
                            <Link to={'/'}>
                                <span className="sr-only">Go to home page</span>
                                <img className="d-block avatar avatar-xxl p-2 mb-2 mx-auto rounded img-thumbnail hover-animate" src={!user.loading && user.success && user.data.avatar_url !== null
                                    ?  user.data.avatar_url
                                    : 'https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/images/robsmitha.png'} loading="lazy"
                                    alt="" />
                            </Link>
                            <h5>
                                {!user.loading && user.success
                                ? user.data.name
                                : 'Rob Smitha'}
                            </h5>
                            <p className="text-muted text-sm mb-0">
                            {!user.loading && user.success
                            ? user.data.location
                            : 'United States'}
                            </p>
                        </CardHeader>
                        <ListGroup flush>
                            <Link to={'/'} className="list-group-item list-group-item-action" hidden={true}>
                                <FontAwesomeIcon icon={faHome} className="text-secondary" />&nbsp;
                                Home
                            </Link>
                            <ListGroupItem className="small text-muted">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />&nbsp;
                                External links
                            </ListGroupItem>
                            <a href="https://github.com/robsmitha" target="_blank" className="list-group-item list-group-item-action" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="text-github" />&nbsp;
                                <span className="sr-only">Rob Smitha's</span>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/robsmitha/" target="_blank" className="list-group-item list-group-item-action" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="text-linkedin" />&nbsp;
                                <span className="sr-only">Rob Smitha's</span>
                                LinkedIn
                            </a>
                            <a href="https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/files/Rob+Smitha+Resume.pdf" target="_blank" className="list-group-item list-group-item-action" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFilePdf} className="text-resume" />&nbsp;
                                <span className="sr-only">Rob Smitha's</span>
                                Résumé
                            </a>
                        </ListGroup>
                    </Card>
                        )}
                </UserConsumer>
            </header>
        )
    }
}