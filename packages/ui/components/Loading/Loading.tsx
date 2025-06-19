import * as React from 'react';
import './Loading.css';

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  variant = 'spinner',
  text,
  fullScreen = false,
  className = ''
}) => {
  const wrapperClasses = [
    'loading',
    fullScreen && 'loading--fullscreen',
    className
  ].filter(Boolean).join(' ');

  const indicatorClasses = [
    'loading__indicator',
    `loading__indicator--${variant}`,
    `loading__indicator--${size}`
  ].join(' ');

  const renderIndicator = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className={indicatorClasses} aria-hidden="true">
            <div />
            <div />
            <div />
          </div>
        );
      case 'pulse':
        return (
          <div className={indicatorClasses} aria-hidden="true">
            <div />
          </div>
        );
      case 'spinner':
      default:
        return <div className={indicatorClasses} aria-hidden="true" />;
    }
  };

  return (
    <div
      className={wrapperClasses}
      role="status"
      aria-live="polite"
      aria-label={text || 'Loading'}
    >
      {renderIndicator()}
      {text && (
        <p className="loading__text">
          {text}
        </p>
      )}
    </div>
  );
};
