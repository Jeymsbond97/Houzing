import React from "react";
import { Container } from "./style";

export const Input = ({
  type,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height,
  icon
}) => {
  return (
    <Container
      icon= {icon}
      defaultValue={defaultValue}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;
