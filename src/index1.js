import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from 'connected-react-router';
import { Route, Switch } from 'react-router'; // react-router v4
import { AppContainer } from 'react-hot-loader'; /* react-hot-loader v3 */
import Loadable from 'react-loadable';

import './index.css';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';
import homeSaga from './sagas/homeSaga';
import BasicExample from './routers/basic';
// import asyncComponent from './components/AsyncComponent';
import MyLoadingComponent from './components/MyLoadingComponent';
const history = createBrowserHistory({
  basename: '/prefix/',
  hashType: 'slash',
  getUserConfirmation: (message, callback) => callback(window.confirm(message)),
  initialEntries: ['/one', '/two', { pathname: '/three' }],
  initialIndex: 1
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state\
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware
      // ... other middlewares ...
    )
  )
);
sagaMiddleware.run(homeSaga);

const render = () => {
  // this function will be reused
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              exact
              path="/"
              component={Loadable({
                loader: () => import('./App'),
                loading: MyLoadingComponent
              })}
            />
            <Route
              exact
              path="/home"
              component={Loadable({
                loader: () => import('./components/home'),
                loading: MyLoadingComponent
              })}
            />
            <Route
              exact
              path="/hello"
              component={Loadable({
                loader: () => import('./components/hello'),
                loading: MyLoadingComponent
              })}
            />
            <Route render={() => <div>Miss</div>} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    /* For Webpack 2.x
       Need to disable babel ES2015 modules transformation in .babelrc
       presets: [
         ["es2015", { "modules": false }]
       ]
    */
    render();

    /* For Webpack 1.x
    const NextApp = require('./App').default
    renderWithHotReload(NextApp)
    */
  });
}
if (module.hot) {
  module.hot.accept('./reducers/rootReducer', () => {
    /* For Webpack 2.x
       Need to disable babel ES2015 modules transformation in .babelrc
       presets: [
         ["es2015", { "modules": false }]
       ]
    */
    store.replaceReducer(connectRouter(history)(rootReducer));

    /* For Webpack 1.x
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(connectRouter(history)(nextRootReducer))
    */
  });
}
registerServiceWorker();
