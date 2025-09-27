import React from "react";
import BaseCard from "@/components/ui/card";
import { cn } from "@/libs/utils";

interface SkillIndicatorProps {
  name: string;
  level: number; // 0 - 100
  color?: string; // Tailwind class for bar color
  icon?: string; // optional icon
  className?: string;
}

const SkillIndicator: React.FC<SkillIndicatorProps> = ({
  name,
  level,
  color = "bg-blue-500",
  icon
}) => {
  return (
    <>
      {/* Top row: icon + name + percentage */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon && <img src={icon} alt="ico-skill" className="w-6 h-6" />}
          <span className="font-medium text-gray-800">{name}</span>
        </div>
        <span className="font-semibold text-gray-700">{level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full rounded-full bg-gray-200 overflow-hidden">
        <div
          className={cn("h-full transition-all duration-500 rounded-full", color)}
          style={{ width: `${level}%` }}
        />
      </div>
    </>
  );
};

export default SkillIndicator;
