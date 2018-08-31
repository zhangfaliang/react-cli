import { renderRoutes, matchRoutes } from 'react-router-config';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter, Route } from 'react-router-dom';

const Root = ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

const Home = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
);

const Child = ({ route }) => (
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
  </div>
);

const GrandChild = ({ someProp }) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
);
class PendingNavDataLoader extends React.Component {
  state = {
    previousLocation: null
  };

  componentWillReceiveProps(nextProps) {
    const navigated = nextProps.location !== this.props.location;
    const { routes } = this.props;

    if (navigated) {
      // save the location so we can render the old screen
      this.setState({
        previousLocation: this.props.location
      });

      // load data while the old screen remains
      // loadNextData(routes, nextProps.location).then((data) => {
      //  // putTheDataSomewhereRoutesCanFindIt(data)
      //  debugger
      //   // clear previousLocation so the next screen renders
      //   this.setState({
      //     previousLocation: null
      //   })
      // })
    }
  }

  render() {
    const { children, location } = this.props;
    const { previousLocation } = this.state;

    // use a controlled <Route> to trick all descendants into
    // rendering the old location
    return (
      <Route location={previousLocation || location} render={() => children} />
    );
  }
}

// wrap in withRouter
const PendingNavDataLoader1 = withRouter(PendingNavDataLoader);

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/child/:id',
        component: Child,
        routes: [
          {
            path: '/child/:id/grand-child',
            component: GrandChild
          }
        ]
      }
    ]
  }
];
const branch = matchRoutes(routes, '/child/23');
console.log(branch);
ReactDOM.render(
  <Router>
    {/* kick it all off with the root route */}
    {/* {renderRoutes(routes)} */}
    <PendingNavDataLoader1 routes={routes}>
      {renderRoutes(routes)}
    </PendingNavDataLoader1>
  </Router>,
  document.getElementById('root')
);
