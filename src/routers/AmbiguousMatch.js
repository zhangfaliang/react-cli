import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Company = () => (
  <div>
    <h2>Company</h2>
  </div>
);
const User = ({ match }) => (
  <div>
    <h2>
      {' '}
      User:
      {match.params.user}
    </h2>
  </div>
);

const AmbiguousMatch = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/about">About(static)</Link>
        </li>
        <li>
          <Link to="/company">Company(static)</Link>
        </li>
        <li>
          <Link to="/kim">Kim(dynamic)</Link>
        </li>
        <li>
          <Link to="/chris">Chris(dynamic)</Link>
        </li>
      </ul>
      {/*React Router允许您在多个位置进行匹配           
      故意（侧边栏，面包屑等）。所以，当你           
      想要清除任何模棱两可的匹配 在一个          
       <Switch>。它将呈现匹配的第一个。 */}
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/company" component={Company} />
        <Route path="/:user" component={User} />
      </Switch>
    </div>
  </Router>
);

export default AmbiguousMatch;
