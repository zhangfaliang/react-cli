import Loadable from 'react-loadable';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const dynamic1 = () => <div>dynamic1</div>;
const dynamic2 = () => <div>dynamic2</div>;

const Home = () => (
  <div>
    <Link to="/dynamic1">dynamic1</Link>
    <Link to="/dynamic2">dynamic2</Link>
  </div>
);
const CodeSplitting = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" exact component={Home} />
      <Route
        path="/dynamic1"
        component={Loadable({
          loader: () => import('../components/hello.js'),
          loading: ' '
        })}
      />
      <Route path="/dynamic2" component={dynamic2} />
    </div>
  </BrowserRouter>
);

export default CodeSplitting;
