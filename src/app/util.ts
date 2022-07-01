import { AVATARS } from './constants';
import { Member, Result, Step } from './types';

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const aproxNumberToZero = (n: number) => (n < 0.15 && n > -0.15 ? 0 : n);

export const getTotal = (list: number[]) => list.reduce((t, item) => (t += item));

export const getAverage = (list: number[]) => getTotal(list) / list.length;

export const hasMostlyZeros = (list: number[]) => list.filter((e) => e !== 0).length <= 1;

export const fixFloat = (n: number) => parseFloat(n.toFixed(2));

export const formatMoney = (amount: number) => {
  const res = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  return res;
};

export const getIndexOfMaxAndMin = (list: number[]) => {
  const max = list.indexOf(Math.max(...list));
  const min = list.indexOf(Math.min(...list));
  return { max, min };
};

export const getSplitResult = (data: Member[]): Result => {
  let list = [...data];
  const steps: Step[] = [];
  const amounts = list.map((e) => e.contribution);
  const total = getTotal(amounts);
  const average = getAverage(amounts);

  let debtList = list.map((e) => fixFloat(average - e.contribution));

  let loops = 0;

  while (!hasMostlyZeros(debtList)) {
    if (loops > 50) break;
    loops++;
    const { min, max } = getIndexOfMaxAndMin(debtList);
    const minVal = debtList[min];
    const maxVal = debtList[max];
    const res = aproxNumberToZero(minVal + maxVal);

    debtList[min] = res > 0 ? 0 : res;
    debtList[max] = res > 0 ? res : 0;

    const amount = fixFloat(maxVal - debtList[max]);
    steps.push({ index: steps.length + 1, from: data[max], to: data[min], amount });
  }

  return { total: fixFloat(total), average: fixFloat(average), steps };
};

export const getUniqueId = (idList: number[]) => {
  let allIds = Array.from({ length: AVATARS.length }, (_, i) => i + 1);
  let availableIds = allIds.filter((n) => !idList.includes(n));
  let index = getRandomInt(0, availableIds.length - 1);
  return availableIds[index];
};
