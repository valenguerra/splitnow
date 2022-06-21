import { Member } from "../app/types";
import { Card } from "./Card";
import { Divider } from "./Divider";
import { Input } from "./Input";
import { Button } from "./Button";
import { useContext } from "react";
import { MemberName } from "./MemberName";

import trash from "../assets/trash.png";
import check from "../assets/check.png";
import { configContext } from "../App";
import { useMemberCard } from "../hooks/useMemberCard";

interface Props {
  member: Member;
  isOpen: boolean;
  firstOpen: boolean;
  toggleIsOpen: () => any;
  updateMember: (member: Member) => any;
  removeMember: (id: number) => any;
}

export const MemberCard = ({ member, isOpen, firstOpen, updateMember, toggleIsOpen, removeMember }: Props) => {
  const { formatMoney } = useContext(configContext);
  
  const {
    name, 
    contribution,
    avatarName,
    nameRef,
    contributionRef, 
    changeName,
    changeContribution,
    save
  } = useMemberCard({member, isOpen, firstOpen, updateMember, toggleIsOpen });

  return (
    <Card onClick={isOpen ? undefined : toggleIsOpen}>
      {isOpen ? (
        <div className="flex flex-col items-stretch gap-3">
          <div className="flex w-full items-center gap-3">
            <Input
              ref={nameRef}
              className="flex-1"
              value={name}
              maxLength={24}
              placeholder={avatarName}
              onChange={(v) => changeName(v)}
              onEnter={() => contributionRef.current?.focus()}
            />
            <Input
              ref={contributionRef}
              placeholder="0.00"
              className="w-1/3"
              type="number"
              value={contribution === 0 || !contribution ? "" : contribution}
              onChange={(v) => changeContribution(parseFloat(v))}
              onEnter={save}
            />
          </div>
          <Divider />
          <div className="flex w-full items-center gap-3">
            <Button
              onClick={() => {
                removeMember(member.id);
                toggleIsOpen();
              }}
            >
              <img src={trash} alt="trash" className="h-5" />
            </Button>
            <Button onClick={save}>
              <img src={check} alt="check" className="h-5" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center gap-3">
          <MemberName member={member} />
          <span className="text-xl font-light">{formatMoney(contribution)}</span>
        </div>
      )}
    </Card>
  );
};
