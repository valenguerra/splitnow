export interface ImageProps {
  src: string;
  alt: string;
}

export interface Member {
  /** From 1 to 44 */
  id: number;
  name: string;
  contribution: number;
}

export interface Step {
  index: number;
  from: Member;
  to: Member;
  amount: number;
}

export interface Result {
  total: number;
  average: number;
  steps: Step[];
}

export interface CountryData {
  iso: string;
  name: string;
  currency: string;
  langCode: string;
}

export interface RawCountryDataObject {
  [key: string]: {
    native: string;
    currency: string[];
    languages: string[];
  };
}
