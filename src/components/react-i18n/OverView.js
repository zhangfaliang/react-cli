import React from 'react';
import { translate, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

function OverView({ t, i18n }) {
  const count = 1;
  const name = 'shiny';
  console.log(i18n, '444444444444');
  const toggle = lng => i18n.changeLanguage(lng);
  return (
    <Trans i18nKey="userMessageUnread" count={count}>
      Hello <strong title={t('title')}>{{ name }}</strong>, you have {{ count }}{' '}
      unread message. <Link to="/msgs">Go to messages</Link>.
    </Trans>
  );
}

export default translate('renderProps', { wait: true })(OverView);
