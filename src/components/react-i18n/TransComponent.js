import React from 'react';
import { Trans, translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
function TransComponent({ t, route }) {
  return (
    <Trans i18nKey="userMessagesUnread" count={23}>
      Hello <strong title={t('nameTitle')}>{'345'}</strong>, you have {23}
      ----
      {t('appName', { name: 'shiny' })}
      ----- unread message. <Link to="/msgs">Go to messages</Link>.
      {renderRoutes(route.routes)}
    </Trans>
  );
}
export default translate('view', { wait: true })(TransComponent);
