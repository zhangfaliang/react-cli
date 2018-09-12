import React, { Component } from 'react';
import './root.css';
import { renderRoutes } from 'react-router-config';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import arLocaleData from 'react-intl/locale-data/ar';
import esLocaleData from 'react-intl/locale-data/es';
import zhLocaleData from 'react-intl/locale-data/zh';

import 'normalize.css';
const messages = defineMessages({
  title: {
    id: 'app.title',
    defaultMessage: 'Welcome to React'
  },
  content1: {
    id: 'app.content1',
    defaultMessage: 'To get started, edit'
  },
  content2: {
    id: 'app.content2',
    defaultMessage: 'and save to reload.'
  },
  test: {
    id: 'app.test',
    defaultMessage: '.test'
  },
  obj: {
    id: 'app.obj',
    defaultMessage: {
      objtest: 'hello',
      arr: [1, 3, 4]
    }
  }
});
class App extends Component {
  render() {
    const {
      intl: { formatMessage },
      route
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div className="languages">
            <a href="/?locale=ar">العربية</a>
            <hr />
            <a href="/?locale=en">English</a>
            <hr />
            <a href="/?locale=es">Español</a>
            <hr />
            <a href="/?locale=zh">zh</a>
          </div>
          <h1 className="App-title">{formatMessage(messages.title)}</h1>
        </header>
        <p className="App-intro">
          <FormattedMessage id="app.title" />
          <hr />
          {formatMessage(messages.content1)} <code>src/App.js</code>{' '}
          {formatMessage(messages.content2)}
          {formatMessage(messages.test)}
          {JSON.stringify(formatMessage(messages.obj))}
        </p>
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default injectIntl(App);
