import cls from "./styles.module.scss";

export interface ButtonProps {
  type?: "submit" | "button";
  text: string;
  styles?: string;
  color?: "red" | "transparent";
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { type = "button", text, onClick, styles, color = "red" } = props;


  return (
      <button
        type={type}
        className={`${cls.btn} ${styles} ${color === "red" ? cls.red : cls.transparent} `}
        onClick={onClick}
      >
        <p className={cls.txt}>{text}</p>
      </button>
  );
};

export default Button;
