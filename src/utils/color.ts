type Map = {
  key: string;
  value: string[];
  hover: string[];
  active: string[];
};

export const ColorSetting: Map[] = [
  {
    key: "default",
    value: ["text-gray-700"],
    hover: ["hover:text-gray-700"],
    active: ["active:text-gray-900"],
  },
  {
    key: "primary",
    value: ["text-gray-700"],
    hover: ["hover:text-indigo-500"],
    active: ["active:text-indigo-700"],
  },
  // {
  //   key: "primary-variant",
  //   class: ["text-indigo-700"],
  //   hover: ["hover:text-indigo-800"],
  //   active: ["active:text-indigo-900"],
  // },
  {
    key: "secondary",
    value: ["text-white"],
    hover: ["hover:text-green-600"],
    active: ["active:text-green-700"],
  },
  // {
  //   key: "error",
  //   class: ["text-red-500"],
  //   hover: ["hover:text-red-600"],
  //   active: ["active:text-red-800"],
  // },
  // {
  //   key: "warning",
  //   class: ["text-yellow-500"],
  //   hover: ["hover:text-yellow-600"],
  //   active: ["active:text-yellow-800"],
  // },
  // {
  //   key: "success",
  //   class: ["text-green-500"],
  //   hover: ["hover:text-green-600"],
  //   active: ["active:text-green-800"],
  // },
];

export function getColor(size: string, hover?: boolean, active?: boolean): string {

  const colorMap = ColorSetting.find((map) => map.key === size);

  if (!colorMap) {
    console.error(`Size "${size}" not found in ColorSetting`);
    return "";
  }

  const classes = [...colorMap.value];
  if (hover) {
    classes.push(...colorMap.hover);
  }
  if (active) {
    classes.push(...colorMap.active);
  }
  return classes.join(" ");
}
