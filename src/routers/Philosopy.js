import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const Philosophy = () => (
  <BrowserRouter>
    <div>
      <Route path="/test" render={() => 'im test'} />
      <Route exact path="/" component={App} />{' '}
    </div>
  </BrowserRouter>
);

const App = () => (
  <div>
    <nav>
      <Link to="/test">Test</Link>
    </nav>
    <div />
  </div>
);

export default Philosophy;
