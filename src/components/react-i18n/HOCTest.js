import React from 'react';
import { translate } from 'react-i18next';
import { renderRoutes } from 'react-router-config';

class HOCTestCompoennet extends React.Component {
  render() {
    const { t, i18n, route } = this.props;
    const toggle = lng => i18n.changeLanguage(lng);

    return (
      <div>
        <h1>{t('appName')}</h1>
        <button onClick={() => toggle('zh')}>{t('linkDE')}</button>
        <button onClick={() => toggle('en')}>{t('linkEN')}</button>
        <a href="https://github.com/i18next/react-i18next" target="_blank">
          {t('nav:link1')}
        </a>
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default translate(['view', 'nav'], { wait: true })(HOCTestCompoennet);
