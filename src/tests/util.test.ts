import { Member } from './../app/types';
/* eslint-disable jest/valid-title */
import {
  aproxNumberToZero,
  fixFloat,
  formatMoney,
  getAverage,
  getIndexOfMaxAndMin,
  getContributionAverage,
  getContributionTotal,
  getTotal,
  getSplitSteps,
} from '../app/util';

describe('utilities', () => {
  describe(aproxNumberToZero.name, () => {
    it('should get 0 when number is 0.149', () => {
      const result = aproxNumberToZero(0.149);
      expect(result).toBe(0);
    });

    it('should get 0 when number is -0.149', () => {
      const result = aproxNumberToZero(-0.149);
      expect(result).toBe(0);
    });

    it('should get 1.5 when number is 1.5', () => {
      const result = aproxNumberToZero(1.5);
      expect(result).toBe(1.5);
    });

    it('should get -1.5 when number is -1.5', () => {
      const result = aproxNumberToZero(-1.5);
      expect(result).toBe(-1.5);
    });
  });

  describe(getTotal.name, () => {
    it('should get the sum of all numbers in an array', () => {
      const input = [1, 2, 3, -4, 9];
      const result = getTotal(input);
      expect(result).toBe(11);
    });
    it('should get 0 when array is empty', () => {
      const input: number[] = [];
      const result = getTotal(input);
      expect(result).toBe(0);
    });
  });

  describe(getAverage.name, () => {
    it('should get the average of all numbers in an array', () => {
      const input = [2, 5, 7, 9, 1, 0];
      const result = getAverage(input);
      expect(result).toBe(4);
    });
    it('should get 0 when array is empty', () => {
      const input: number[] = [];
      const result = getAverage(input);
      expect(result).toBe(0);
    });
  });

  describe(fixFloat.name, () => {
    it('should get 0.12 when input is 0.123456', () => {
      const result = fixFloat(0.123456);
      expect(result).toBe(0.12);
    });
    it('should get 5 when input is 5', () => {
      const result = fixFloat(5);
      expect(result).toBe(5);
    });
  });

  describe(formatMoney.name, () => {
    it('should get string dollar format from a number', () => {
      const result = formatMoney(1234567.89);
      expect(result).toBe('$1,234,567.89');
    });
    it('should add decimal zeros if it is an integer', () => {
      const result = formatMoney(123);
      expect(result).toBe('$123.00');
    });
    it('should add one zero if it has only one decimal place', () => {
      const result = formatMoney(123.4);
      expect(result).toBe('$123.40');
    });
  });

  describe(getIndexOfMaxAndMin.name, () => {
    it('should get the index of the max and min number as an object', () => {
      const input = [1, 2, 3, 4, 5, -6];
      const result = getIndexOfMaxAndMin(input);
      const expected = { min: input.indexOf(-6), max: input.indexOf(5) };
      expect(result).toEqual(expected);
    });
    it('should get undefined if array is empty', () => {
      const input: number[] = [];
      const result = getIndexOfMaxAndMin(input);
      expect(result).toBe(undefined);
    });
  });

  describe(getContributionTotal.name, () => {
    it('should get the sum of all members contributions', () => {
      const input: Member[] = [
        { id: 0, name: 'juan', contribution: 500 },
        { id: 1, name: 'pablo', contribution: 400 },
        { id: 2, name: 'tomás', contribution: 210 },
      ];
      const result = getContributionTotal(input);
      expect(result).toBe(1110);
    });
    it('should get 0 if array is empty', () => {
      const input: Member[] = [];
      const result = getContributionTotal(input);
      expect(result).toBe(0);
    });
  });

  describe(getContributionAverage.name, () => {
    it('should get the average of all members contributions', () => {
      const input: Member[] = [
        { id: 0, name: 'juan', contribution: 700 },
        { id: 1, name: 'pablo', contribution: 500 },
        { id: 2, name: 'tomás', contribution: 900 },
      ];
      const result = getContributionAverage(input);
      expect(result).toBe(700);
    });
    it('should get 0 if array is empty', () => {
      const input: Member[] = [];
      const result = getContributionAverage(input);
      expect(result).toBe(0);
    });
  });

  describe(getSplitSteps.name, () => {
    it('should get Steps to split expenses', () => {
      const input: Member[] = [
        { id: 0, name: 'A', contribution: 700 },
        { id: 1, name: 'B', contribution: 584 },
        { id: 2, name: 'C', contribution: 289 },
        { id: 3, name: 'D', contribution: 75.8 },
        { id: 4, name: 'E', contribution: 0 },
        { id: 5, name: 'F', contribution: 0 },
      ];
      const result = getSplitSteps(input);
      const expected = [
        { index: 1, from: input[4], to: input[0], amount: 274.8 },
        { index: 2, from: input[5], to: input[1], amount: 274.8 },
        { index: 3, from: input[3], to: input[0], amount: 150.4 },
        { index: 4, from: input[3], to: input[1], amount: 34.4 },
        { index: 5, from: input[3], to: input[2], amount: 14.2 },
      ];
      expect(result).toEqual(expected);
    });
    it('should get Steps with periodical contributions', () => {
      const input: Member[] = [
        { id: 0, name: 'A', contribution: 100 },
        { id: 1, name: 'B', contribution: 0 },
        { id: 2, name: 'C', contribution: 0 },
      ];
      const result = getSplitSteps(input);
      const expected = [
        { index: 1, from: input[1], to: input[0], amount: 33.33 },
        { index: 2, from: input[2], to: input[0], amount: 33.33 },
      ];
      expect(result).toEqual(expected);
    });
  });
});
