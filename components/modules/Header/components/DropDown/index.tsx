"use client"
import { useState } from "react";
import Select, { ValueType } from "react-select";
import { useRouter } from "../../../../../node_modules/next/navigation";


import DropDownStyles from "./styles";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  {
    value: "uk",
    label: "UK",
  },
  {
    value: "en",
    label: "EN",
  },
];

const DropDown = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); 

  const onChange = (newValue: ValueType<OptionType, false>) => {
    if (newValue) {
      const newLanguage = (newValue as OptionType).value;
        setCurrentLanguage(newLanguage);
      ;
    }
  };

  const selectStyles = DropDownStyles;

  return (
    <Select
      id={"select"}
      value={options.find((option) => option.value === currentLanguage)}
      onChange={onChange}
      options={options}
      isSearchable={false}
      styles={selectStyles}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default DropDown;
