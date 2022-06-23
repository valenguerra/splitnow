import { forwardRef } from 'react';

interface Props {
  className?: string;
  placeholder?: string;
  value: number | undefined;
  min?: string;
  max?: string;
  step?: string;
  onEnter?: (value: string) => any;
  onChange?: (value: string) => any;
  onKey?: (key: string) => any;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, max, min, onEnter, onChange, onKey, ...rest }, ref) => {
    return (
      <div className={`relative flex h-10 items-center gap-2 rounded bg-gray-200 ${className}`}>
        <input
          ref={ref}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onEnter && onEnter(e.currentTarget.value);
            } else {
              onKey && onKey(e.key);
            }
          }}
          onChange={(e) => onChange && onChange(e.target.value)}
          className={`h-full w-full px-7 rounded border-2 border-gray-200 bg-transparent outline-none focus:border-slate-300`}
          {...rest}
        />
      </div>
    );
  }
);
