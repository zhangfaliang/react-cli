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
// import { IntlProvider, addLocaleData } from 'react-intl';
// import arLocaleData from 'react-intl/locale-data/ar';
// import esLocaleData from 'react-intl/locale-data/es';
//import * as translations from './i18n/locales';
import i18n from './i18n/locales/testI18';
import { I18nextProvider, translate } from 'react-i18next';

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
// addLocaleData(arLocaleData);
// addLocaleData(esLocaleData);

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
const locale = window.location.search.replace('?locale=', '') || 'en';
//const messages = translations[locale];
//translate.setI18n(i18n)
// 您可以使用setI18n函数设置i18n实例，以避免使用i18nextProvider：

const render = () => {
  ReactDOM.render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <BrowserRouter>{renderRoutes(route)}</BrowserRouter>
      </Provider>
    </I18nextProvider>,

    document.getElementById('root')
  );
};
render();

registerServiceWorker();
