import { Member } from '../app/types';
import logo from '../assets/logo.png';
import plus from '../assets/plus.png';
import { useMoney } from '../hooks/useMoney';
import { useSplitManager } from '../hooks/useSplitManager';
import { Card } from './Card';
import { Divider } from './Divider';
import { Layout } from './Layout';
import { MemberCard } from './MemberCard';
import { Step } from './Step';
import { LightText, Title } from './Text';

const INITIAL: Member[] = [{ id: 1, name: 'Roberto', contribution: 1500 }];

export const Home = () => {
  const formatMoney = useMoney();
  const { members, memberCardOpen, result, updateMember, removeMember, addMember, toggleMemberCardOpen } =
    useSplitManager(INITIAL);

  return (
    <Layout>
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full items-center gap-2">
          <img src={logo} alt="split money" className="h-12" />
          <h1 className="flex-1 text-3xl font-bold">split10.com</h1>
        </div>
        <p className="self-start">La forma más simple de dividir gastos entre amigos!</p>
      </div>
      <section className="flex flex-col gap-6">
        {members &&
          members.map((m) => {
            return (
              <MemberCard
                key={m.id}
                member={m}
                updateMember={updateMember}
                removeMember={removeMember}
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
                <Title>Total</Title>
                <span className="text-xl font-light">{formatMoney(result.total)}</span>
              </div>
              <div className="flex items-center justify-between">
                <LightText>Cada uno paga</LightText>
                <LightText>{formatMoney(result.average)}</LightText>
              </div>
            </div>
            <Divider />
            <LightText>Pasos para repartir</LightText>
            {result.steps.map((step) => (
              <Step step={step} key={step.index} />
            ))}
          </Card>
        </section>
      )}
    </Layout>
  );
};
