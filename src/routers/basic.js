import React from 'react';
import { BrowserRouter as Route, Router, Link } from 'react-router-dom';
import listenPushPath from '../sagas/homeSaga';
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/topics">topics</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home}>
        {' '}
      </Route>
      <Route exact path="/about" component={About}>
        {' '}
      </Route>
      <Route exact path="/topics" component={Topics}>
        {' '}
      </Route>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Topics = ({ match }) => (
  <div>
    <h2>topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>components </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topics . </h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.parans.topicId}</h3>
  </div>
);

export default BasicExample;
