import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { translate, Trans } from 'react-i18next';
import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    const { t, i18n, route } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App">
        <div className="App-header">
          {/* <h2>{t("Welcome to React")}</h2> */}
          <button onClick={() => changeLanguage('de')}>de</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </div>
        <div className="App-intro">
          <Trans>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
        <div style={{ marginTop: 40 }}>
          <a href="https://react.i18next.js">
            Learn more: https://react.i18next.js
          </a>
        </div>
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

// extended main view with translate hoc
export default translate('ll')(App);
