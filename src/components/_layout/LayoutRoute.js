import React, { useRef } from 'react';
import { Route } from 'react-router-dom';  
import { Row, Col, Container } from 'reactstrap';
import Header from './Header'
import NavMenu from './NavMenu';

const Layout = ({ children }) => {
    return <section>
    <a className="skip-to-content-link btn btn-primary" href={window.location.href.includes('#main') ? window.location.href : window.location.href.concat('#main')} hidden={true}>Skip to main content</a>
    <NavMenu />
    <Container className="py-3 py-md-4">
        <Row>
            <Col lg="3" md="4" className="d-none d-md-block">
                <Header />
            </Col>
            <Col lg="9" md="8">
                <main id="main">
                {children}
                </main>
            </Col>
        </Row>
    </Container>
</section>};


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