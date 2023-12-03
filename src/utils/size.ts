type Map = {
  key: string;
  class: string[];
};

export const SizeSetting: Map[] = [
  { key: "large", class: ["text-base", "md:text-lg", "lg:text-xl"] },
  { key: "medium", class: ["text-sm", "md:text-base", "lg:text-lg"] },
  { key: "small", class: ["text-xs", "md:text-sm", "lg:text-base"] },
  { key: "h1", class: ["text-2xl", "md:text-3xl", "lg:text-4xl"] },
  { key: "h2", class: ["text-xl", "md:text-2xl", "lg:text-3xl"] },
  { key: "h3", class: ["text-lg", "md:text-xl", "lg:text-2xl"] },
  { key: "h4", class: ["text-base", "md:text-lg", "lg:text-xl"] },
  { key: "p", class: ["text-base", "md:text-lg", "lg:text-xl"] },
];
