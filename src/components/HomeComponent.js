import React, { Component, Fragment } from 'react';
import { Container } from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Container disableGutters={true} maxWidth="sm">
                    Hello World
                </Container>
            </Fragment>
        );
    }
}

export default Home;