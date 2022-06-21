import { useEffect, useRef, useState } from "react";
import { AVATARS } from "../app/constants";
import { Member } from "../app/types";

interface Props {
  member: Member;
  isOpen: boolean;
  firstOpen: boolean;
  updateMember: (member: Member) => any;
  toggleIsOpen: () => any;
}

export const useMemberCard = ({member, isOpen, firstOpen, updateMember, toggleIsOpen}: Props) => {
  const [currentMember, setCurrentMember] = useState(() => Object.assign({}, member));
  const { id, name, contribution } = currentMember;
  const avatarName = AVATARS[id - 1][1];
  const nameRef = useRef<HTMLInputElement>(null);
  const contributionRef = useRef<HTMLInputElement>(null);

  const changeName = (name: string) => {
    setCurrentMember({ ...currentMember, name });
  };

  const changeContribution = (contribution: number) => {
    const copy = Number.isNaN(contribution) ? 0 : contribution;
    setCurrentMember({ ...currentMember, contribution: copy });
  };

  const save = () => {
    let newName = name;
    newName = newName.trim();
    updateMember({
      id,
      contribution: contribution ?? 0,
      name: newName === "" ? avatarName : newName,
    });
    toggleIsOpen();
  };

  useEffect(() => {
    if (isOpen) {
      if (name.length > 0 && nameRef.current !== document.activeElement) {
        contributionRef.current?.focus();
      } else {
        nameRef.current?.focus();
      }
    } else {
      setCurrentMember(member);
    }
  }, [firstOpen, isOpen, member, name, avatarName, updateMember]);

  useEffect(() => {
    if (firstOpen) setCurrentMember({ ...member, name: "" });
  }, [firstOpen, member]);
  
  return { name, contribution, avatarName, nameRef, contributionRef, changeName, changeContribution, save };
}