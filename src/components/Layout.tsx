import { VALENTINO_GUERRA_URL } from "../app/constants";
import coffee from "../assets/coffee.png";
import { SmallButton } from "./SmallButton";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="m-auto flex min-h-screen w-full max-w-2xl flex-col py-6 px-4 text-slate-900 overflow-x-hidden">
      <main className="flex flex-1 flex-col items-stretch gap-6 overflow-x-hidden">
        {children}
      </main>
      <footer className="flex items-center justify-center pt-24 gap-4 flex-wrap">
        <a href={VALENTINO_GUERRA_URL} target="__blank">
          <SmallButton className="text-sm">by Valentino Guerra</SmallButton>
        </a>
      </footer>
    </div>
  );
};
