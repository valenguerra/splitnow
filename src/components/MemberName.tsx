import { Member } from '../app/types';
import { Avatar } from './Avatar';

interface Props {
  member: Member;
  small?: boolean;
}

export const MemberName = ({ member, small }: Props) => {
  const { id, name } = member;

  return (
    <div className={`flex items-center ${small ? 'gap-1' : 'w-full gap-3'}`} style={small ? { maxWidth: '40%' } : {}}>
      <Avatar id={id} small={small} />
      <span
        className={`flex-1 overflow-hidden text-ellipsis whitespace-nowrap ${
          small ? 'text-sm' : 'text-xl font-semibold'
        }`}
      >
        {name}
      </span>
    </div>
  );
};
