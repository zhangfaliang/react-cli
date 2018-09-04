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

import homeSaga from './sagas/homeSaga';
import App from './components/App';
import { route } from './route/route';
import registerServiceWorker from './registerServiceWorker';

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
sagaMiddleware.run(homeSaga);
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(route)}</BrowserRouter>
    </Provider>,

    document.getElementById('root')
  );
};
render();
// if (module.hot) {
//   module.hot.accept("./App", () => {
//     /* For Webpack 2.x
//        Need to disable babel ES2015 modules transformation in .babelrc
//        presets: [
//          ["es2015", { "modules": false }]
//        ]
//     */
//     render();

//     /* For Webpack 1.x
//     const NextApp = require('./App').default
//     renderWithHotReload(NextApp)
//     */
//   });
// }
// if (module.hot) {
//   module.hot.accept("./reducers/rootReducer", () => {
//     /* For Webpack 2.x
//        Need to disable babel ES2015 modules transformation in .babelrc
//        presets: [
//          ["es2015", { "modules": false }]
//        ]
//     */
//     store.replaceReducer(connectRouter(history)(rootReducer));

//     /* For Webpack 1.x
//     const nextRootReducer = require('./reducers').default
//     store.replaceReducer(connectRouter(history)(nextRootReducer))
//     */
//   });
// }
registerServiceWorker();
