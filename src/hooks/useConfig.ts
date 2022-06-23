import { getUserIso } from './../app/countryAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { formatMoney } from '../app/util';
import countryData from '../app/countryData.json';
import { CountryData, RawCountryDataObject } from '../app/types';

export interface Config {
  formatMoney: (amount: number) => any;
}

export const useConfig = (): Config => {
  const [iso, setIso] = useState('US');
  const countries = countryData as RawCountryDataObject;

  const getCountryData = (iso: string): CountryData => {
    const country = countries[iso];
    const currency = country.currency[0] ?? 'USD';
    const language = country.languages[0] ?? 'en';
    return {
      iso,
      currency,
      name: country.native,
      langCode: [language, iso].join('-'),
    };
  };

  const format = (amount: number) => {
    const { currency, langCode } = getCountryData(iso);
    return formatMoney({ amount, langCode, currency });
  };

  useEffect(() => {
    getUserIso().then((newIso) => setIso(newIso));
  });

  return { formatMoney: format };
};
