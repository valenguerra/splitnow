import { Layout } from "./Layout";
import { MemberCard } from "./MemberCard";
import { Member } from "../app/types";
import { Card } from "./Card";

import plus from "../assets/plus.png";
import logo from "../assets/logo.png";
import smallRight from "../assets/small_right.png";
import settings from "../assets/settings.png";
import { Divider } from "./Divider";
import { MemberName } from "./MemberName";
import { useSplitManager } from "../hooks/useSplitManager";
import { useContext } from "react";
import { configContext } from "../App";

const INITIAL: Member[] = [{ id: 1, name: "Roberto", contribution: 1500 }];

export const Home = () => {
  const { formatMoney } = useContext(configContext);
  const { members, memberCardOpen, result, updateMember, removeMember, addMember, toggleMemberCardOpen } =
    useSplitManager(INITIAL);

  return (
    <Layout>
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full items-center gap-2">
          <img src={logo} alt="split money" className="h-12" />
          <h1 className="flex-1 text-3xl font-bold">split10.com</h1>
          <img src={settings} alt="settings" />
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
                <h2 className="text-xl font-semibold">Total</h2>
                <span className="text-xl font-light">{formatMoney(result.total)}</span>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-md font-light text-slate-500">Cada uno paga</h3>
                <span className="text-md font-light text-slate-500">{formatMoney(result.average)}</span>
              </div>
            </div>
            <Divider />
            <span className="text-md font-light text-slate-500">Pasos para repartir</span>
            {result.steps.map((step, i) => {
              return (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex flex-1 items-center gap-3">
                    <span className="text-md font-light text-slate-500">{i + 1}.</span>
                    <MemberName small member={step.from} />
                    <img src={smallRight} alt="arrow right" className="h-4" />
                    <MemberName small member={step.to} />
                  </div>
                  <span className="text-md font-light">{formatMoney(step.amount)}</span>
                </div>
              );
            })}
          </Card>
        </section>
      )}
    </Layout>
  );
};
