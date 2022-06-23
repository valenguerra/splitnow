interface Props {
  children: string;
  className?: string;
}

export const Title = ({ children, className }: Props) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export const LightText = ({ children, className }: Props) => {
  return <span className={`text-md font-light text-slate-500 ${className}`}>{children}</span>;
};
