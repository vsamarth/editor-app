import * as React from 'react';

import { twMerge } from 'tailwind-merge';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, errorMessage, ...props }, ref) => {
    const inputId = React.useId();
    const isError = Boolean(errorMessage);
    return (
      <fieldset className="pt-4">
        <label htmlFor={inputId} className="sr-only">
          {placeholder}
        </label>
        <input
          id={inputId}
          className={twMerge(
            'flex h-11 w-full rounded-md',
            'border border-slate-300 bg-transparent',
            'py-2 px-3 text-slate-700 placeholder:text-slate-400',
            'focus:outline-none focus:ring-1  focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ',
            isError &&
              'border-red-600 placeholder:text-red-500 bg-red-50 focus:ring-red-400',
            className,
          )}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
        {errorMessage && (
          <span className="mt-2 ml-2 text-sm text-red-600 absolute">
            {errorMessage}
          </span>
        )}
      </fieldset>
    );
  },
);
Input.displayName = 'Input';

export default Input;
