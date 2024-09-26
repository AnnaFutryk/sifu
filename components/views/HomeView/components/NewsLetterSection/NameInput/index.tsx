import { ChangeEvent } from "react";
import cls from "../styles.module.scss";

interface NameProps {
  errors: { [key: string]: string };
  values: { [key: string]: string };
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const NameInput = (props: NameProps) => {
  const { errors, values, handleChange } = props;

  return (
    <div className={cls.inputContainer}>
      <input
        className={cls.input}
        style={errors.name ? { color: "var(--red)" } : {}}
        onChange={handleChange}
        id="name"
        placeholder="Enter name"
        type="text"
        name="name"
        value={values.name}
        autoComplete="off"
      />
      {errors.name && <p className={cls.errorText}>{errors.name}</p>}
    </div>
  );
};

export default NameInput;
