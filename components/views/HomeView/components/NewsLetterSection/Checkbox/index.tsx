import { ChangeEvent } from "react";
import cls from "../styles.module.scss";
import Link from "next/link";

interface Props {
  value: (name: string, value: boolean) => void;
  isChecked: boolean;
  errors: { [key: string]: string };
}

const Checkbox = (props: Props) => {
  const { value, isChecked, errors } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    value("checkbox", e.target.checked); // Передаємо значення чекбокса
  };

  return (
    <div>
      <div className={cls.radioWrapp}>
        <input
          className={cls.checkbox}
          type="checkbox"
          name="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <p className={cls.checkboxText}>
          I agree to the{" "}
          <Link
            href={"https://www.kepler-interactive.com/pages/privacy-policy"}
            rel="noopener noreferrer nofollow"
            target="_blank"
            className={cls.link}
          >
            privacy policy{" "}
          </Link>
          and agree to receive occasional news from Kepler and its studios
        </p>
      </div>
      {errors.checkbox && <p className={cls.errorText}>{errors.checkbox}</p>}
    </div>
  );
};

export default Checkbox;
