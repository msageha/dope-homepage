import React from "react";
import _ from "lodash";
import { ColorSetting } from "../utils/color";
import { SizeSetting } from "../utils/size";

export const Typography = ({
  children,
  color = "default",
  size = "p",
  className = "",
  hover = false,
  active = false,
}: {
  children: React.ReactNode;
  color?:
    | "default"
    | "primary"
    | "primary-variant"
    | "secondary"
    | "error"
    | "warning"
    | "success";
  size?: "h1" | "h2" | "h3" | "h4" | "p";
  className?: string;
  hover?: boolean;
  active?: boolean;
}): JSX.Element => {
  const _color = _.head(
    ColorSetting.filter((map) => map.key === color).map((map) => {
      const classes = [...map.class];
      if (map.hover && hover) {
        classes.push(...map.hover);
      }
      if (map.active && active) {
        classes.push(...map.active);
      }
      return classes;
    }),
  )!;
  const _size = _.head(
    SizeSetting.filter((map) => map.key === size).map((map) => map.class),
  )!;
  const _className = className + " " + [..._color, ..._size].join(" ");

  return {
    h1: <h1 className={_className + " font-bold"}>{children}</h1>,
    h2: <h2 className={_className + " font-bold"}>{children}</h2>,
    h3: <h3 className={_className + " font-bold"}>{children}</h3>,
    h4: <h4 className={_className + " font-bold"}>{children}</h4>,
    p: <p className={_className}>{children}</p>,
  }[size];
};
