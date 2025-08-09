import i18n from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import idTranslation from './locales/id.json';
import { NAMESPACE_LANGUAGE_KEY } from './hooks/use-t';

i18n
  .use(I18NextHttpBackend) // Enable loading translations from files
  .use(initReactI18next) // Connects with React
  .init({
    lng: 'id',
    debug: false, // Debug in development
    fallbackLng: 'id', // Fallback language
    interpolation: {
      escapeValue: false // React already escapes values
    },
    resources: {
      en: {
        [NAMESPACE_LANGUAGE_KEY]: enTranslation
      },
      id: {
        [NAMESPACE_LANGUAGE_KEY]: idTranslation
      }
    }
  });

export default i18n;
