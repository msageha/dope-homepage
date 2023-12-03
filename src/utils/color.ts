type Map = {
  key: string;
  class: string[];
  hover: string[];
  active: string[];
};

export const ColorSetting: Map[] = [
  {
    key: "default",
    class: ["text-gray-500"],
    hover: ["hover:text-gray-600"],
    active: ["active:text-gray-800"],
  },
  {
    key: "primary",
    class: ["text-indigo-500"],
    hover: ["hover:text-indigo-600"],
    active: ["active:text-indigo-800"],
  },
  {
    key: "primary-variant",
    class: ["text-indigo-700"],
    hover: ["hover:text-indigo-800"],
    active: ["active:text-indigo-900"],
  },
  {
    key: "secondary",
    class: ["text-green-500"],
    hover: ["hover:text-green-600"],
    active: ["active:text-green-700"],
  },
  {
    key: "error",
    class: ["text-red-500"],
    hover: ["hover:text-red-600"],
    active: ["active:text-red-800"],
  },
  {
    key: "warning",
    class: ["text-yellow-500"],
    hover: ["hover:text-yellow-600"],
    active: ["active:text-yellow-800"],
  },
  {
    key: "success",
    class: ["text-green-500"],
    hover: ["hover:text-green-600"],
    active: ["active:text-green-800"],
  },
];

export const ButtonColorSetting: Map[] = [
  {
    key: "default",
    class: ["text-gray-500 border-gray-500"],
    hover: ["hover:bg-gray-500 hover:text-white"],
    active: ["active:bg-gray-800"],
  },
  {
    key: "primary",
    class: ["text-indigo-500 border-indigo-500"],
    hover: ["hover:bg-indigo-500 hover:text-white"],
    active: ["active:bg-indigo-600"],
  },
  {
    key: "primary-variant",
    class: ["text-indigo-700 border-indigo-700"],
    hover: ["hover:bg-indigo-700 hover:text-white"],
    active: ["active:bg-indigo-900"],
  },
  {
    key: "secondary",
    class: ["text-green-500 border-green-500"],
    hover: ["hover:bg-green-500 hover:text-white"],
    active: ["active:bg-green-600"],
  },
  {
    key: "error",
    class: ["text-red-500 border-red-500"],
    hover: ["hover:bg-red-500 hover:text-white"],
    active: ["active:bg-red-600"],
  },
  {
    key: "warning",
    class: ["text-yellow-500 border-yellow-500"],
    hover: ["hover:bg-yellow-500 hover:text-white"],
    active: ["active:bg-yellow-600"],
  },
  {
    key: "success",
    class: ["text-green-500 border-green-500"],
    hover: ["hover:bg-green-500 hover:text-white"],
    active: ["active:bg-green-600"],
  },
];
