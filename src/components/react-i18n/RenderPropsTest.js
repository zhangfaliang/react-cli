import React from 'react';
import { I18n } from 'react-i18next';
function TranslatebleView() {
  return (
    <I18n ns={['view', 'view']}>
      {(t, { i18n, ready }) => (
        <div>
          <h1>{t('appName')}</h1>
          <p>
            {t('appName', {
              /* options t options */
            })}
          </p>
        </div>
      )}
    </I18n>
  );
}

export default TranslatebleView;
