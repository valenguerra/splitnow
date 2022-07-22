import { DONATIONS_URL, VALENTINO_GUERRA_URL } from '../app/constants';
import { SmallButton } from './SmallButton';
import coffee from '../assets/coffee.png';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="m-auto flex min-h-screen w-full max-w-2xl flex-col py-6 px-4 text-slate-900">
      <main className="flex flex-1 flex-col items-stretch gap-6">{children}</main>
      <footer className="flex items-center justify-center pt-24 gap-4 flex-wrap">
        <a href={VALENTINO_GUERRA_URL} target="__blank">
          <SmallButton className="text-sm">by Valentino Guerra</SmallButton>
        </a>
        <a href={DONATIONS_URL} target="__blank">
          <SmallButton className="text-sm">
            Buy me a coffee
            <img src={coffee} alt="coffee" className="ml-1 inline-flex h-5 w-5" />
          </SmallButton>
        </a>
      </footer>
    </div>
  );
};
