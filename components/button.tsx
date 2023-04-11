import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const buttonVariants = cva(
  clsx(
    'inline-flex items-center justify-center outline-none',
    'rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2',
    'focus:ring-slate-700 focus:ring-offset-2 disabled:opacity-50  disabled:pointer-events-none',
  ),
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-700',
        ghost:
          'bg-transparent text-slate-900 hover:bg-slate-50 focus:ring-slate-100',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-12 px-8 rounded-md text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: React.ElementType<any>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, as: Component = 'button', ...props }, ref) => {
    return (
      <Component
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
Button.defaultProps = {
  as: 'button',
};

export default Button;
