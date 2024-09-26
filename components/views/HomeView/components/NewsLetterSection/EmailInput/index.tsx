import { ChangeEvent } from 'react';
import cls from '../styles.module.scss';

interface EmailProps {
  errors: { [key: string]: string };
  values: { [key: string]: string };
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const EmailInput = (props: EmailProps) => {
  const { errors, values, handleChange} = props;

  return (
    <div className={cls.inputContainer}>
      <input
        className={cls.input}
        style={errors.email ? { color: 'var(--red)' } : {}}
        onChange={handleChange}
        id="email"
        type="text"
        placeholder="Enter e-mail address"
        name="email"
        autoComplete="off"
        value={values.email}
      />
      {errors.email && (
        <p className={cls.errorText}>
          {errors.email}
        </p>
      )}
    </div>
  );
};

export default EmailInput;
