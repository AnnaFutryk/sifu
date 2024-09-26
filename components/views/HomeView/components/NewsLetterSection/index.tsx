"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import cls from "./styles.module.scss";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import Button from "../../../../common/Button";
import Comment from "./Comment";
import Checkbox from "./Checkbox";
import { validateField } from "./utils/validation";
import Ellipse from "../../../../../public/icons/ellipse.svg";

const NewsLetter = () => {
  const initialValues = {
    name: "",
    email: "",
    comment: "",
  };

  const [values, setValues] = useState(initialValues);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const initialErrors = {
    name: "",
    email: "",
    checkbox: "",
  };

  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setCheckboxChecked(!checkboxChecked);
    } else {
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const validateFields = () => {
    const nameError = validateField("name", values.name);
    const emailError = validateField("email", values.email);
    const checkboxError = checkboxChecked ? "" : "Checkbox must be checked";

    setErrors({
      name: nameError,
      email: emailError,
      checkbox: checkboxError,
    });

    return !nameError && !emailError && !checkboxError;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validateFields()) {
      return;
    }

    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }

    setValues(initialValues);
    setCheckboxChecked(false);
  };

  return (
    <section className={cls.wrapper}>
      <div className="titleBlock">
        <h2>NEWSLETTER</h2>
        <Ellipse />
        <h2 style={{ fontWeight: 100 }}>通讯</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={cls.formWrapper}
      >
        <div className={cls.inputsWrapp}>
          <NameInput
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
          <EmailInput
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
          <Comment values={values} handleChange={handleChange} />
          <Checkbox
            isChecked={checkboxChecked}
            value={(name, value) => setCheckboxChecked(value)}
            errors={errors}
          />
        </div>

        <Button text="Subscribe" type="submit" color="transparent" />
      </form>
    </section>
  );
};

export default NewsLetter;
