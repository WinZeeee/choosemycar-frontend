import * as React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  isRequired?: boolean;
  validationState?: 'valid' | 'invalid' | 'warning';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    error,
    helperText,
    isRequired = false,
    validationState,
    fullWidth = false,
    leftIcon,
    rightIcon,
    className = '',
    id,
    ...props
  }, ref) => {
    const inputId = id || React.useId();
    const errorId = error ? `${inputId}-error` : undefined;
    const helperTextId = helperText ? `${inputId}-helper` : undefined;

    const inputClasses = [
      'input',
      leftIcon && 'input--with-left-icon',
      rightIcon && 'input--with-right-icon',
      validationState && `input--${validationState}`,
      error && 'input--error',
      fullWidth && 'input--full-width',
      className
    ].filter(Boolean).join(' ');

    const wrapperClasses = [
      'input-wrapper',
      fullWidth && 'input-wrapper--full-width'
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className="input__label">
            {label}
            {isRequired && <span className="input__required" aria-label="required">*</span>}
          </label>
        )}

        <div className="input__container">
          {leftIcon && (
            <span className="input__icon input__icon--left" aria-hidden="true">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-invalid={!!error || validationState === 'invalid'}
            aria-describedby={[errorId, helperTextId].filter(Boolean).join(' ') || undefined}
            aria-required={isRequired}
            {...props}
          />

          {rightIcon && (
            <span className="input__icon input__icon--right" aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </div>

        {error && (
          <p id={errorId} className="input__error" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={helperTextId} className="input__helper-text">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
