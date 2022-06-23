interface Props {
  onClick: () => any;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ className, ...rest }: Props) => {
  return (
    <button
      className={`flex h-10 flex-1 items-center justify-center transition rounded bg-gray-200 md:hover:bg-gray-300 ${className}`}
      {...rest}
    />
  );
};
