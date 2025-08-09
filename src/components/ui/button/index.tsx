import React from "react";
import { cn } from "@/libs/utils";
import Spinner from "../spinner";

import style from "./style.module.scss";
type Variant = "filled" | "outlined" | "text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  isDisable?: boolean;
  isLoading?: boolean;
  variant?: Variant;
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  className,
  isDisable = false,
  isLoading = false,
  variant = "filled",
  ...rest
}) => {
  const variantClass = {
    filled: style.button_filled,
    outlined: style.button_outlined,
    text: style.button_text,
  }[variant];

  const disabledStyle = isDisable || isLoading ? style.button_disabled : "";
  const mergedClassName = cn(
    style.button_base,
    variantClass,
    disabledStyle,
    className
  );

  return (
    <button
      className={mergedClassName}
      disabled={isDisable || isLoading}
      {...rest}
    >
      {isLoading && <Spinner size={16} className="mr-2" />}
      {label}
      {children}
    </button>
  );
};

export default Button;
