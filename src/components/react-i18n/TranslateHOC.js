import React from 'react';
import { translate } from 'react-i18next';
import { renderRoutes } from 'react-router-config';

function TranslatebleHOC(props) {
  const { t, tReady, route } = props;
  return (
    <div>
      <h1>{t('appName')}</h1>
      <p>
        {t('appName', {
          /* options t options */
        })}
      </p>{' '}
      {renderRoutes(route.routes)}
    </div>
  );
}
export default translate('view')(TranslatebleHOC);
