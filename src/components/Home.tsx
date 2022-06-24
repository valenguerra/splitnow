import { useTranslation } from 'react-i18next';
import { Member } from '../app/types';
import { formatMoney, getUniqueId } from '../app/util';
import plus from '../assets/plus.png';
import money from '../assets/money.png';
import { useSplitManager } from '../hooks/useSplitManager';
import { Card } from './Card';
import { Divider } from './Divider';
import { Layout } from './Layout';
import { MemberCard } from './MemberCard';
import { Step } from './Step';
import { LightText, Title } from './Text';

export const Home = () => {
  const { t, i18n } = useTranslation('global');

  const INITIAL: Member[] = [{ id: getUniqueId([]), name: t('members.example'), contribution: 650 }];
  const { members, memberCardOpen, result, updateMember, removeMember, addMember, toggleMemberCardOpen } =
    useSplitManager(INITIAL);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'esp' ? 'eng' : 'esp');
  };

  return (
    <Layout>
      <header className="flex w-full flex-col gap-4">
        <div className="flex w-full items-center">
          <h1 className="text-3xl font-bold">split10</h1>
          <span className="flex-1 text-3xl text-slate-400 font-light">.com</span>
          <span
            className="text-base font-medium border border-slate-300 px-3 py-0.5 rounded cursor-pointer select-none md:hover:bg-slate-200"
            onClick={toggleLanguage}
          >
            {i18n.language.toUpperCase()}
          </span>
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
            <img src={plus} alt="add" className="h-6" />
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
