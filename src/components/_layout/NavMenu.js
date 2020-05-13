import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css'
import { Container, NavbarToggler, NavbarBrand, NavItem, NavLink, Navbar } from 'reactstrap';
import { UserConsumer } from '../../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faHome, faFilePdf, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            navHeight: 56
        };
    }

    componentDidMount(){
        const avatar = document.querySelector('.avatar');
        avatar.onload = () => {
            const navbar = document.querySelector('.main-nav');
            this.setState({ navHeight: navbar !== null ? navbar.clientHeight : 56 })
        };
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    collapseNavbar = () => {
        this.setState({ collapsed: true })
    }

    render(){
        return(
            <UserConsumer>
            {({ user }) => (
            <section className="main-nav-header" style={{paddingTop: this.state.navHeight + 'px'}}>
                <Navbar className="main-nav navbar navbar-expand-lg fixed-top navbar-light shadow bg-light p-3">
                    <Container>
                        <NavbarBrand className="mr-auto mr-lg-0" tag={Link} to="/">
                            <div className="media">
                            <img className="navatar img-fluid d-block d-md-none rounded" 
                                src={!user.loading && user.success && user.data.avatar_url !== null
                                ?  user.data.avatar_url
                                : 'https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/images/robsmitha.png'}
                                 />&nbsp;
                                <div className="media-body">
                                    <span className="d-block">Rob Smitha</span>
                                    <small className="text-muted d-block">Software Engineer</small>
                                </div>
                            </div>
                        </NavbarBrand>
                        <NavbarToggler className="p-2 border-0" onClick={this.toggleNavbar}>
                            <FontAwesomeIcon icon={this.state.collapsed ? faBars : faTimes} />
                        </NavbarToggler>
                        <div style={{ top: this.state.navHeight + 'px' }} 
                        className={'navbar-collapse offcanvas-collapse bg-light '.concat(!this.state.collapsed ? ' open' : '')} 
                        id="navbarsExampleDefault">
                            <ul className="navbar-nav mr-auto" hidden={true}>
                                <NavItem>
                                    <NavLink tag={Link} to={'/'} onClick={this.collapseNavbar}>
                                        <FontAwesomeIcon icon={faHome} className="text-secondary" />&nbsp;Home
                                    </NavLink>
                                </NavItem>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="navbar-text small text-muted">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />&nbsp;
                                    External links
                                </li>
                                <li className="nav-item">
                                    <a href="https://github.com/robsmitha" target="_blank" className="nav-link" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="text-github" />&nbsp;GitHub
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.linkedin.com/in/robsmitha/" target="_blank" className="nav-link" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-linkedin" />&nbsp;LinkedIn
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/files/Rob+Smitha+Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">
                                    <FontAwesomeIcon icon={faFilePdf} className="text-resume" />&nbsp;Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </Navbar>
            </section> 
            )}
            </UserConsumer>           
            )
    }
}