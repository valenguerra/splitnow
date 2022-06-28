import { forwardRef, useState } from 'react';
import { ENDS_WITH_A_DOT } from '../app/constants';
import { Input } from './Input';

interface Props {
  className?: string;
  placeholder?: string;
  value: string | undefined;
  onEnter?: (value: string) => any;
  onChange?: (value: string) => any;
  onKey?: (key: string) => any;
}

const MIN = 0;
const MAX = 9999999;

export const InputMoney = forwardRef<HTMLInputElement, Props>(({ onChange, onEnter, value, ...rest }, ref) => {
  const [hangingDot, setHangingDot] = useState<boolean>(false);

  const handleOnChange = (value: string) => {
    const endsWithADot = value.match(ENDS_WITH_A_DOT) ? true : false;
    setHangingDot(endsWithADot);

    const number = parseFloat(value) ?? 0;
    if (!onChange || number < MIN || number > MAX) return;
    onChange(number.toString());
  };

  const handleOnEnter = (value: string) => {
    const number = parseFloat(value) ?? 0;
    if (onEnter) onEnter(number.toString());
  };

  return (
    <Input
      ref={ref}
      onChange={handleOnChange}
      onEnter={handleOnEnter}
      value={hangingDot ? value + '.' : value}
      {...rest}
    />
  );
});
