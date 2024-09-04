import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";

export type SelectOption = {
  label: string;
  value: null | string;
};
export type SelectProps = Omit<
  DropdownProps<SelectOption>,
  "labelField" | "valueField"
>;

export const Select = ({ ...dropdownProps }: SelectProps) => {
  return <Dropdown labelField="label" valueField="value" {...dropdownProps} />;
};
