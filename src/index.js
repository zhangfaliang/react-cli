import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router'; // react-router v4

import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from 'connected-react-router';

import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';
const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer), //
  {},
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/home" render={() => 'home'} />
        <Route exact path="/app" render={() => 'app'} />

        <Route render={() => <div>Miss</div>} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
