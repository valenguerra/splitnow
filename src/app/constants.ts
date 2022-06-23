import { Config } from '../hooks/useConfig';

export const LANGUAGES = ['en', 'es'];

export const CURRENCIES = [
  { name: 'USD', symbol: '$' },
  { name: 'CNY', symbol: '¥' },
  { name: 'EUR', symbol: '€' },
  { name: 'SEK', symbol: 'Kr' },
  { name: 'CHF', symbol: 'Fr' },
  { name: 'KRW', symbol: '₩' },
];

export const VALENTINO_GUERRA_URL = '';

type Pair = [string, string];

export const AVATARS: Pair[] = [
  ['Bee', 'Abejita'],
  ['Monkey', 'Monito'],
  ['Gorilla', 'Gorila'],
  ['Butterfly', 'Mariposa'],
  ['Spider', 'Arañita'],
  ['Duck', 'Patito'],
  ['Snake', 'Serpiente'],
  ['Mouse', 'Ratoncito'],
  ['Owl', 'Búho'],
  ['Fish', 'Pez'],
  ['Flamingo', 'Flamenco'],
  ['Nautilus', 'Nautilus'],
  ['Shark', 'Tiburón'],
  ['Gull', 'Gaviota'],
  ['Seahorse', 'Caballito de mar'],
  ['Seal', 'Foca'],
  ['Lobster', 'Langosta'],
  ['Walrus', 'Morsa'],
  ['Beetle', 'Escarabajo'],
  ['Llama', 'Llama'],
  ['Sheep', 'Ovejita'],
  ['Ladybug', 'Mariquita'],
  ['Toucan', 'Tucán'],
  ['Kangaroo', 'Cangurito'],
  ['Lizard', 'Lagartija'],
  ['Octopus', 'Pulpo'],
  ['Wolf', 'Lobito'],
  ['Horse', 'Caballito'],
  ['Panda', 'Panda'],
  ['Bear', 'Osito'],
  ['Crab', 'Cangrejo'],
  ['Fox', 'Zorro'],
  ['Elephant', 'Elefante'],
  ['Dog', 'Perrito'],
  ['Dolphin', 'Delfín'],
  ['Crocodile', 'Cocodrilo'],
  ['Hippo', 'Hipopótamo'],
  ['Giraffe', 'Jirafita'],
  ['Frog', 'Sapito'],
  ['Caterpillar', 'Oruguita'],
  ['Cat', 'Gatito'],
  ['Bat', 'Murcielago'],
  ['Whale', 'Ballena'],
  ['Ant', 'Hormiguita'],
];

export const DEFAULT_CONFIG: Config = {
  data: {
    language: LANGUAGES[0],
    currency: CURRENCIES[0],
  },
  updateData: (ud) => {},
};
