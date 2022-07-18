import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import eng from './app/translations/eng.json';
import esp from './app/translations/esp.json';
import { Home } from './components/Home';

i18next.init({
  interpolation: { escapeValue: false },
  lng: window.navigator.language === 'es' ? 'esp' : 'eng',
  resources: {
    esp: { global: esp },
    eng: { global: eng },
  },
});

export const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <Home />
    </I18nextProvider>
  );
};
