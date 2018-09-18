import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Link, Switch, Route, BrowserRouter } from 'connected-react-router';

import createStore from './utils/createStore';
import { injectReducer } from './utils/reducerUtils';
import reducer, { key } from './rootReducer';

export const store = createStore(
  {},
  {
    [key]: reducer
  }
);
const lazyLoader = importComponent =>
  class AsynComponent extends Component {
    state = {
      C: null
    };
    async componentDidMount() {
      const { default: C } = await importComponent();
      this.setState({
        C
      });
    }

    render() {
      const { C } = state;
      return C ? <C {...this.props} /> : null;
    }
  };

export default class Root extends Comment {
  render() {
    return (
      <div className="root__container">
        <Provider store={store}>
          <Router>
            <div className="root__content">
              <Link to="/">Home</Link>
              <br />
              <Link to="/list">List</Link>
              <br />
              <Link to="/detail">Detail</Link>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={lazyLoader(() => import('./components/Root'))}
                />
                <Route
                  path="/list"
                  component={lazyLoader(() => import('./components/Hello'))}
                />
                <Route
                  path="/detail"
                  component={lazyLoader(() => import('./components/Home'))}
                />
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}
