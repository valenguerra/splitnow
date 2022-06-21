import { Member } from "../app/types";
import useImage from "../hooks/useImage";

interface Props {
  member: Member;
  small?: boolean;
}

export const MemberName = ({ member, small }: Props) => {
  const { id, name } = member;
  const { image: avatar } = useImage(`avatar${id < 10 ? `0${id}` : id}.png`);

  return (
    <div className={`flex items-center ${small ? "gap-1" : "w-full gap-3"}`} style={small ? { maxWidth: "40%" } : {}}>
      {avatar ? (
        <img src={avatar} alt="avatar" className={small ? "h-4" : "h-8"} />
      ) : (
        <div className={`rounded-full bg-slate-200 ${small ? "h-4 w-4" : "h-8 w-8"}`} />
      )}
      <span className={`flex-1 overflow-hidden text-ellipsis whitespace-nowrap ${small ? "text-sm" : "text-xl font-semibold"}`}>
        {name}
      </span>
    </div>
  );
};
