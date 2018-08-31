import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from 'connected-react-router';
import { Route, Switch } from 'react-router'; // react-router v4
import { AppContainer } from 'react-hot-loader'; /* react-hot-loader v3 */

import { createBrowserHistory } from 'history';

import './index.css';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';
import homeSaga from './sagas/homeSaga';
import {
  BasicExample,
  URLParameters,
  AuthExample,
  CustomLink,
  PreventingTransitionsExample,
  NoMatchExample,
  RecursiveExample,
  SidebarExample,
  AnimationExample,
  AmbiguousMatch,
  RouteConfigExample,
  ModalGallery,
  Philosophy,
  BaseComponent,
  CodeSplitting
} from './routers/index';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
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
          {/* place ConnectedRouter under Provider */}
          <App />
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
