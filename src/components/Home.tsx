import { useTranslation } from 'react-i18next';
import { Member } from '../app/types';
import { formatMoney, getUniqueId } from '../app/util';
import money from '../assets/money.png';
import { useSplitManager } from '../hooks/useSplitManager';
import { Card } from './Card';
import { Divider } from './Divider';
import { Layout } from './Layout';
import { MemberCard } from './MemberCard';
import { Step } from './Step';
import { LightText, Title } from './Text';
import { SmallButton } from './SmallButton';
import plus from '../assets/plus.png';
import { useState } from 'react';
import { HelpModal } from './HelpModal';

export const Home = () => {
  const { t, i18n } = useTranslation('global');
  const [showingHelpModal, setShowingHelpModal] = useState(false);

  const INITIAL: Member[] = [{ id: getUniqueId([]), name: t('members.example'), contribution: 650 }];
  const { members, memberCardOpen, result, updateMember, removeMember, addMember, toggleMemberCardOpen } =
    useSplitManager(INITIAL);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'esp' ? 'eng' : 'esp');
  };

  return (
    <Layout>
      <HelpModal open={showingHelpModal} onClose={() => setShowingHelpModal(false)} />
      <header className="flex w-full flex-col gap-4">
        <div className="flex w-full items-center">
          <h1 className="text-3xl font-bold">splitnow</h1>
          <span className="flex-1 text-3xl text-slate-400 font-light">.app</span>
          <div className="flex gap-2">
            <SmallButton onClick={toggleLanguage}>{i18n.language.toUpperCase()}</SmallButton>
            <SmallButton onClick={() => setShowingHelpModal(true)}>?</SmallButton>
          </div>
        </div>
        <p className="self-start">
          {t('header.subtitle')}
          <img src={money} alt="money" className="ml-1 -mt-1 h-6 inline-flex" />
        </p>
      </header>
      <section className="flex flex-col gap-6">
        {members &&
          members.map((m) => {
            return (
              <MemberCard
                key={m.id}
                member={m}
                updateMember={updateMember}
                removeMember={removeMember}
                isTheOnlyMember={members.length === 1}
                isOpen={memberCardOpen?.id === m.id}
                firstOpen={memberCardOpen?.firstOpen ? true : false}
                toggleIsOpen={() => toggleMemberCardOpen(m.id)}
              />
            );
          })}
        {memberCardOpen === null && members.length < 44 && (
          <Card onClick={addMember} className="flex w-32 justify-center self-center">
            <img src={plus} alt="plus" />
          </Card>
        )}
      </section>
      {result && memberCardOpen === null && (
        <section>
          <Card className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Title>{t('result.total')}</Title>
                <span className="text-xl font-light">{formatMoney(result.total)}</span>
              </div>
              <div className="flex items-center justify-between">
                <LightText>{t('result.each')}</LightText>
                <LightText>{formatMoney(result.average)}</LightText>
              </div>
            </div>
            <Divider />
            <LightText>{t('result.steps')}</LightText>
            {result.steps.map((step) => (
              <Step step={step} key={step.index} />
            ))}
          </Card>
        </section>
      )}
    </Layout>
  );
};
