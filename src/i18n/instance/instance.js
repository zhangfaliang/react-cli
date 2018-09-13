import i18n from 'i18next';
import Languagedetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false // if not  using I18nextProvider
  },
  resources: {
    en: {
      ll: {
        hh: 'en'
      },
      renderProps: {
        title: 'shiny',
        name: 'zhang'
      },
      view: {
        appName: 'ttjj'
      },
      nav: {
        appName: 'ZY',
        linkDE: 'linkDE',
        linkEN: 'linkEN',
        link1: 'XXXXXX-XXXXX'
      }
    },
    de: {
      ll: {
        hh: 'de'
      },
      renderProps: {
        title: 'red',
        name: 'fan'
      },
      view: {
        appName: 'lootery'
      },
      nav: {
        appName: 'ZY',
        linkDE: 'linkDE',
        linkEN: 'linkEN',
        link1: 'XXXXXX-XXXXX'
      }
    }
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },
  react: {
    wait: true,
    bindI18n: 'languageChange loaded',
    bindStore: 'added removed',
    nsMode: false
  }
});
export default i18n;
