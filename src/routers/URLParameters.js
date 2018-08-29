import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ParamsExample = () => (
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to="/netflix">NetFlix</Link>
        </li>
        <li>
          <Link to="/zillow-group">Zillow Group"</Link>
        </li>
        <li>
          <Link to="/yahoo">YaHoo</Link>
        </li>
        <li>
          <Link to="/moudus-create">Moudus Create</Link>
        </li>
      </ul>
      <Route path="/:id" component={Child} />
      <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
    </div>
  </Router>
);

const Child = ({ match }) => (
  <div>
    <h3>
      ID:
      {match.params.id}
    </h3>
  </div>
);

const ComponentWithRegex = ({ match }) => {
  console.log(match);

  return (
    <div>
      <h3>Only asc/desc are allow : {match.params.direction}</h3>
    </div>
  );
};

export default ParamsExample;
