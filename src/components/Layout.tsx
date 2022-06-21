interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="m-auto flex min-h-screen w-full max-w-2xl flex-col py-6 px-4 text-slate-900">
      <main className="flex flex-1 flex-col items-stretch gap-6">{children}</main>
      <footer className="flex items-center justify-center pt-24">Footer</footer>
    </div>
  );
};
