import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

/* -------- Heading -------- */

type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

export function Heading({ children, className = '', ...rest }: Readonly<HeadingProps>) {
  return (
    <h2
      className={cn('text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl', className)}
      {...rest}
    >
      {children}
    </h2>
  );
}

/* -------- Body Text -------- */

type TextSize = 'sm' | 'base';

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: TextSize;
};

const textSize: Record<TextSize, string> = {
  sm: 'text-sm leading-6',
  base: 'text-base leading-7',
};

export function Text({ size = 'sm', className = '', ...rest }: Readonly<TextProps>) {
  return <p className={cn(textSize[size], 'text-zinc-600', className)} {...rest} />;
}

/* -------- Strong (emphasised inline text) -------- */

type StrongProps = HTMLAttributes<HTMLElement>;

export function Strong({ className = '', ...rest }: Readonly<StrongProps>) {
  return <strong className={cn('font-semibold text-zinc-900', className)} {...rest} />;
}

/* -------- Badge (small label pill) -------- */

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: Readonly<BadgeProps>) {
  return (
    <span className="self-start rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
      {children}
    </span>
  );
}
