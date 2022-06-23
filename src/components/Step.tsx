import { Step as StepType } from '../app/types';
import { MemberName } from './MemberName';
import smallRight from '../assets/small_right.png';
import { useContext } from 'react';
import { configContext } from '../App';

interface Props {
  step: StepType;
}

export const Step = ({ step }: Props) => {
  const { formatMoney } = useContext(configContext);
  const { index, from, to, amount } = step;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center gap-2 md:gap-4">
        <span className="text-md font-light text-slate-500" style={{ minWidth: 14 }}>
          {index}.
        </span>
        <MemberName small member={from} />
        <img src={smallRight} alt="arrow right" className="h-4" />
        <MemberName small member={to} />
      </div>
      <span className="text-md font-light">{formatMoney(amount)}</span>
    </div>
  );
};
