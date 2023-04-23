"use client";

import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  onClick: (value: string) => void;
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  onClick,
  label,
  icon: Icon,
  selected,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex flex-col gap-3 p-4 rounded-xl border-2 hover:border-black transition cursor-pointer ${
        selected ? "border-black" : "border-neutral-200"
      }`}
    >
      <div className="flex items-center flex-row  space-x-5">
        <Icon size={30} />
        <p className="font-semibold">{label}</p>
      </div>
    </div>
  );
};

export default CategoryInput;
