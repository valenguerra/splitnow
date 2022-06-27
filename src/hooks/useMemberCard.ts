import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AVATARS } from '../app/constants';
import { Member } from '../app/types';

interface Props {
  member: Member;
  isOpen: boolean;
  firstOpen: boolean;
  updateMember: (member: Member) => any;
  toggleIsOpen: () => any;
}

export const useMemberCard = ({ member, isOpen, firstOpen, updateMember, toggleIsOpen }: Props) => {
  const { i18n } = useTranslation('global');
  const [currentMember, setCurrentMember] = useState(() => Object.assign({}, member));
  const { id, name, contribution } = currentMember;
  const langIndex = i18n.language === 'esp' ? 1 : 0;
  const avatarName = AVATARS[id - 1][langIndex];
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
      name: newName === '' ? avatarName : newName,
    });
    toggleIsOpen();
  };

  useEffect(() => {
    const focusConfig: FocusOptions = { preventScroll: true };

    const focusContributionInput = () => contributionRef.current?.focus(focusConfig);

    const focusNameInput = () => nameRef.current?.focus(focusConfig);

    if (isOpen) {
      const nameIsEmpty = name.length > 0;
      const nameIsFocused = nameRef.current === document.activeElement;
      if (nameIsEmpty && !nameIsFocused) {
        focusContributionInput();
      } else {
        focusNameInput();
      }
    } else {
      setCurrentMember(member);
    }
  }, [firstOpen, isOpen, member, name, avatarName, updateMember]);

  useEffect(() => {
    if (firstOpen) setCurrentMember({ ...member, name: '' });
  }, [firstOpen, member]);

  return {
    name,
    contribution,
    avatarName,
    nameRef,
    contributionRef,
    changeName,
    changeContribution,
    save,
  };
};
