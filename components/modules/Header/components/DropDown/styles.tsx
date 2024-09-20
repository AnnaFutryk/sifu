import { StylesConfig, GroupBase } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

const DropDownStyles: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
  control: (styles, { isFocused }) => ({
    ...styles,
    "&:hover": {
      color: "var(--red)",
      transition: "color var(--transition)",
      "& svg": {
        color: "var(--red)",
      },
    },
    color: isFocused ? "var(--red)" : "#F2F3FF",
    boxShadow: "var(--red-shadow)",
    backgroundColor: 'rgba(17, 17, 17, 0.40)',
    backdropFilter: 'blur(20px)',
    border: 'none',
    width: '100px',
    height: '46px',
    fontSize: "18px",
    fontWeight: 900,
    lineHeight: 'normal',
    cursor: "pointer",
    transition: "color var(--transition), boxShadow",
    
    '@media(min-width: 900px)': {
      height: "40px",
    }
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "var(--white)", 
    margin: 0,
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "var(--red)" : "var(--white)",
    border: "none",
    padding: "4px 16px",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: 1.33,
    marginBottom: "4px",
    cursor: "pointer",
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
  }),
  dropdownIndicator: (styles, state) => ({
    ...styles,
    width: "24px",
    height: "24px",
    padding: 0,
    color: state.isFocused ? "var(--red)" : "var(--white)",
    transition: "transform 0.5s",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
    "&:hover": {
      color: "var(--red)",
    },
    "& svg": {
      width: "24px",
      height: "24px",
    },
  }),
};

export default DropDownStyles;
