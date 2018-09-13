import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init(
  {
    // we init with resources
    resources: {
      en: {
        translations: {
          'To get started, edit <1>src/App.js</1> and save to reload.':
            'To get started, edit <1>src/App.js</1> and save to reload.',
          'Welcome to React': 'Welcome to React and react-i18next'
        },
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
        translations: {
          'To get started, edit <1>src/App.js</1> and save to reload.':
            'Starte in dem du, <1>src/App.js</1> editierst und speicherst.',
          'Welcome to React': 'Willkommen bei React und react-i18next'
        },
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
      wait: true
    }
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  }
);

export default i18n;
