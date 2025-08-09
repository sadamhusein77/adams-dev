import React, { forwardRef } from 'react';
import { cn } from '@/libs/utils';
import styles from './style.module.scss';

import { icoFailedFilled } from '@/assets';
import { useFormContext } from 'react-hook-form';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  name: string;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, error, className, name, ...rest }, ref) => {
    const inputClass = cn(styles.input, className);
    const { register, setValue, watch } = useFormContext();

    const inputValue = watch(name);

    const reset = (e: React.MouseEvent) => {
      e.preventDefault();
      setValue(name, '');
    }

    return (
      <div className={styles.input}>
        {label && (<div className={styles.input__label}>
          <label className={styles.label}>{label}</label>
        </div>)}

        <div className={cn(styles.input__field, error && styles['input__field--invalid'])}>
          <input className={inputClass} {...register(name)} {...rest} />

          {inputValue && (
            <button type='button' className={styles.input__field__reset} onClick={reset}>
              <img src={icoFailedFilled} alt="input reset icon" />
            </button>
          )}
        </div>

        {error && (<div className={styles.input__validation}>
          <span className={styles.validation__error}>{error}</span>
        </div>)}
      </div>
    );
  }
);

InputText.displayName = 'InputText';

export default InputText;
