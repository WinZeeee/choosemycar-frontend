import * as React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    variant = 'default',
    padding = 'md',
    className = '',
    children,
    ...props
  }, ref) => {
    const classes = [
      'card',
      `card--${variant}`,
      padding !== 'none' && `card--padding-${padding}`,
      className
    ].filter(Boolean).join(' ');

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLElement, CardHeaderProps>(
  ({
    className = '',
    children,
    ...props
  }, ref) => {
    const classes = ['card__header', className].filter(Boolean).join(' ');

    return (
      <header
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </header>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({
    className = '',
    children,
    ...props
  }, ref) => {
    const classes = ['card__body', className].filter(Boolean).join(' ');

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

export interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const CardFooter = React.forwardRef<HTMLElement, CardFooterProps>(
  ({
    className = '',
    children,
    ...props
  }, ref) => {
    const classes = ['card__footer', className].filter(Boolean).join(' ');

    return (
      <footer
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </footer>
    );
  }
);

CardFooter.displayName = 'CardFooter';
