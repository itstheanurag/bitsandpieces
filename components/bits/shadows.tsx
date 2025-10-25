import React from "react";

type ShadowStyle = {
  name: string;
  className: string;
};

export const shadowStyles: ShadowStyle[] = [
  {
    name: "Subtle",
    className: "shadow-sm dark:shadow-slate-800",
  },
  {
    name: "Medium",
    className: "shadow-md dark:shadow-slate-800",
  },
  {
    name: "Large",
    className: "shadow-lg dark:shadow-slate-800",
  },
  {
    name: "Extra Large",
    className: "shadow-xl dark:shadow-slate-800",
  },
  {
    name: "Inner",
    className: "shadow-inner dark:shadow-slate-800",
  },
  {
    name: "Outline",
    className: "shadow-outline dark:shadow-slate-800",
  },
];

const ShadowLibrary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {shadowStyles.map((shadow, index) => (
        <div
          key={index}
          className={`flex items-center justify-center h-32 rounded-lg bg-white dark:bg-slate-900 ${shadow.className}`}
        >
          <p className="text-slate-900 dark:text-white font-semibold">
            {shadow.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShadowLibrary;
