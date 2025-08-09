import { cn } from "@/libs/utils";
import React from "react";

import style from "./style.module.scss";

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 36,
  color = "text-white",
  className,
}) => {
  const baseClass = cn(style.spinner, color, className);
  return <div className={baseClass} style={{ width: size, height: size }} />;
};

export default Spinner;
