import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import { renderRoutes } from 'react-router-config';
import { route } from './route/route';

import createStore from './utils/createStore';
import { injectReducer } from './utils/reducerUtils';
import reducer, { key } from './utils/rootReducer';

export const store = createStore(
  {},
  {
    [key]: reducer
  }
);
const Loading = () => <div>loading</div>;
export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Link to="/home">Home</Link>
              <br />
              <Link to="/hello">Hello</Link>
              <br />
              <Route
                exact
                path="/hello"
                component={Loadable({
                  loader: () => import('./components/Hello'),
                  loading: Loading
                })}
              />
              <Route
                exact
                path="/home"
                component={Loadable({
                  loader: () => import('./components/Home'),
                  loading: Loading
                })}
              />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
