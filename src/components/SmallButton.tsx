interface Props {
  children: React.ReactNode;
  onClick?: () => any;
  className?: string;
}

export const SmallButton = ({ children, onClick, className }: Props) => {
  return (
    <span
      className={`font-medium border border-slate-300 px-3 py-0.5 rounded cursor-pointer select-none md:hover:bg-slate-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
