import React, { Component } from 'react';
import { Route } from 'react-router-dom';  
import { Row, Col, Container, Navbar } from 'reactstrap';
import Header from './Header'
import NavMenu from './NavMenu';


const Layout = ({ children }) => (
    <section>
        <NavMenu />
        <Container className="py-3 py-md-4">
            <Row>
                <Col lg="3" md="4" className="d-none d-md-block">
                    <Header />
                </Col>
                <Col lg="9" md="8">
                    {children}
                </Col>
            </Row>
        </Container>
    </section>
);

const LayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <Layout>
                <Component {...matchProps} />
            </Layout>
        )} />
    )
}

export default LayoutRoute;