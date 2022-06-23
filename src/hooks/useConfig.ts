import { useEffect } from 'react';
import { useState } from 'react';
import { DEFAULT_CONFIG, LANGUAGES } from '../app/constants';

interface ConfigData {
  language: string;
  currency: {
    name: string;
    symbol: string;
  };
}

export interface Config {
  data: ConfigData;
  updateData: (updatedData: Partial<ConfigData>) => any;
}

export const useConfig = (): Config => {
  const [data, setData] = useState(DEFAULT_CONFIG.data);

  const updateData = (updatedData: Partial<ConfigData>) => {
    setData((prev) => ({ ...prev, ...updatedData }));
  };

  useEffect(() => {
    const language = window.navigator.language;
    if (LANGUAGES.includes(language)) {
      updateData({ language: language as typeof LANGUAGES[number] });
    }
  }, []);

  return {
    data,
    updateData,
  };
};
