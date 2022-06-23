import { formatMoney } from './../app/util';
import { configContext } from './../App';
import { useContext } from 'react';

export const useMoney = () => {
  const { data } = useContext(configContext);
  const { currency } = data;

  return (amount: number) => formatMoney({ amount, currency: currency.name });
};
