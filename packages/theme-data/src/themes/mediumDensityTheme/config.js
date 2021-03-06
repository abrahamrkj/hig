import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import abstractTheme from "../abstractTheme";
import system from "./system";
import input from "./components/input";
import menu from "./components/menu";

const lightGrayThemeConfig = extendTheme(
  abstractTheme.config,
  Object.assign(
    {},
    mapKeys(system.density, key => `DENSITY.${key}`),
    mapKeys(input, key => `DENSITY.${key}`),
    mapKeys(menu, key => `DENSITY.${key}`)
  )
);

export default lightGrayThemeConfig;
