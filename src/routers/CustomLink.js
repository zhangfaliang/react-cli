import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = props => {
  console.log(props);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};
const About = props => {
  console.log(props);

  return (
    <div>
      <h2>About</h2>
    </div>
  );
};
const OldSchoolMenLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={props => {
      console.log(props, '22222');
      const { match } = props;
      return (
        <div>
          {match ? '>' : ''}
          <Link to={to}>{label}</Link>
        </div>
      );
    }}
  />
);

const CustomExample = () => (
  <Router>
    <div>
      <OldSchoolMenLink activeOnlyWhenExact={true} to="/" label="Home" />
      <OldSchoolMenLink to="/about" label="About" />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
export default CustomExample;
