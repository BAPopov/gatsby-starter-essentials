import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '~src/theme';

import Button from '~components/Button';
import Container from '~components/Container';

import Page from '~layout/Page';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/404">Go to custom 404 page</Link>
        <Button>Hello</Button>
      </Container>
    </Page>
  </ThemeProvider>
);

export default IndexPage;
