import React from "react";

type IconProps = {
  color?: string;
  height?: number | string;
  width?: number | string;
};

export const ArrowRightIcon: React.FC<IconProps> = ({
  color = "#1f1f1f",
  height = 24,
  width = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 -960 960 960"
      fill={color}
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
};
