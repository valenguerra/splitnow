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
  from: Member;
  to: Member;
  amount: number;
}

export interface Result {
  total: number;
  average: number;
  steps: Step[];
}

export interface formatMoneyProps {
  amount: number;
  langCode: string;
  currency: string;
}

export interface Config {
  langCode: string;
  currency: string;
  setLangCode: (langCode: string) => any;
  setCurrency: (currency: string) => any;
  formatMoney: (amount: number) => any;
}