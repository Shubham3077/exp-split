import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type DropdownProps<T extends string | number> = {
  value: T | null;
  options: T[];
  name: string;
  placeholder?: string;
  onChange: (value: T) => void;
};

const Dropdown = <T extends string | number>({
  value,
  options,
  name,
  placeholder = "Type",
  onChange,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Dropdown trigger */}
      <button
        type="button"
        name={name}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 text-xs font-medium"
      >
        <span>{value ?? placeholder}</span>

        <ChevronDownIcon className="size-4" />
      </button>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-max rounded-lg bg-white shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="block w-full px-4 py-1 text-left text-xs"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
