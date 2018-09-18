import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider, translate } from 'react-i18next';
import adaptive from 'adaptive.js';

import route from './route/route';
import createStore from './utils/createStore';
import rootReducer from './reducers/rootReducer';
import i18n from './i18n/locales/testI18';

adaptive.desinWidth = 640;
adaptive.maxWidth = 640;
adaptive.baseFont = 24;
adaptive.init();
export const store = createStore(
  {},
  {
    global: rootReducer
  }
);
ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>{renderRoutes(route)}</BrowserRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
