"use client";
import { useState } from "react";
import Select from "react-select";
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
  const [currentLanguage, setCurrentLanguage] = useState<OptionType | null>({
    value: "en",
    label: "EN",
  });

  const onChange = (newValue: OptionType | null) => {
    if (newValue) {
      setCurrentLanguage(newValue);
    }
  };

  const selectStyles = DropDownStyles;

  return (
    <Select
      id="select"
      value={currentLanguage}
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
