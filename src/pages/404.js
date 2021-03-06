import React from 'react';
import { Link } from 'gatsby';

import Page from '~layout/Page';

const PageNotFound = () => (
  <Page>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`
      }}
    >
      <h1>404</h1>
      <p>Page Not Found.</p>
      <p>This is a custom 404 page</p>
      <Link to="/">Go to index</Link>
    </div>
  </Page>
);

export default PageNotFound;
