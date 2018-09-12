import adaptive from 'adaptive.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import rootSaga from './sagas/rootSaga';
import App from './components/App';
import { route } from './route/route';
import registerServiceWorker from './registerServiceWorker';

// const worker = new Worker('./worker.js')
// console.log(worker,'444444444');
adaptive.desinWidth = 640;
adaptive.maxWidth = 640;
adaptive.baseFont = 24;
adaptive.init();
console.log(adaptive);

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
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
sagaMiddleware.run(rootSaga);
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(route)}</BrowserRouter>
    </Provider>,

    document.getElementById('root')
  );
};
render();

registerServiceWorker();
