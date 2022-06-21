import { forwardRef, HTMLInputTypeAttribute } from "react";

interface Props {
  type?: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  value: string | number | undefined;
  prefix?: React.ReactNode;
  min?: string;
  max?: string;
  maxLength?: number;
  pattern?: string;
  step?: string;
  onEnter?: (value: string) => any;
  onChange?: (value: string) => any;
  onKey?: (key: string) => any;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, prefix, onEnter, onChange, onKey, ...rest }, ref) => {
    return (
      <div className={`relative flex h-10 items-center gap-2 rounded bg-gray-200 ${className}`}>
        {prefix && <div className="absolute pl-3">{prefix}</div>}
        <input
          ref={ref}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEnter && onEnter(e.currentTarget.value);
            } else {
              onKey && onKey(e.key);
            }
          }}
          onChange={(e) => onChange && onChange(e.target.value)}
          className={`h-full w-full ${
            prefix ? "px-7" : "px-3"
          } rounded border-2 border-gray-200 bg-transparent outline-none focus:border-slate-300`}
          {...rest}
        />
      </div>
    );
  }
);
