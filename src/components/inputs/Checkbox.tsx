"use client";
import { useState } from "react";

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const CheckIcon: React.FC<{ checked: boolean; isHovered: boolean }> = ({
  checked,
  isHovered,
}) => {
  return (
    (isHovered || checked) && (
      <svg
        width="17"
        height="13"
        viewBox="0 0 17 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.500008 6.572L6.0488 11.5072C6.06926 11.5254 6.10056 11.5237 6.11899 11.5035L16.14 0.5"
          stroke={checked ? "#fff" : "#EEEEEE"}
          strokeLinecap="round"
        />
      </svg>
    )
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`transition-all duration-100 w-[23px] aspect-square rounded-md border border-[#EEEEEE] hover:border-[#BDBDBD] flex justify-center items-center cursor-pointer ${
        checked ? "bg-[#2469F6]" : "bg-white"
      }`}
      onClick={onChange}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CheckIcon isHovered={isHovered} checked={checked} />
    </div>
  );
};
