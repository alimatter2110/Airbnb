"use client";

import { Icon } from "leaflet";
import { IconType } from "react-icons";

interface CategoryInput {
  selected: boolean;
  icon: IconType;
  label: String;
  onClick: (value: String) => void;
}

const CategoryInput: React.FC<CategoryInput> = ({
  selected,
  icon: Icon,
  label,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`scrollbar rounded-xl border-2 p-4 hover:border-black flex flex-col gap-3 transition cursor-pointer
        ${selected ? "border-black" : "border-neutral-200"}`}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
