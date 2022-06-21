interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => any;
}

export const Card = ({ children, className, onClick }: Props) => {
  const btnStyle = "cursor-pointer select-none md:hover:bg-slate-200";

  return (
    <div
      className={`w-full rounded-md border border-slate-300 px-4 py-4 ${onClick ? btnStyle : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
