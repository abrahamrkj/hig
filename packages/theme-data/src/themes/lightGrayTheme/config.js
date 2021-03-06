import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import { config as abstractThemeConfig } from "../abstractTheme";
import { config as mediumDensityThemeConfig } from "../mediumDensityTheme";
import system from "./system";
import formField from "./components/formField";
import input from "./components/input";
import label from "./components/label";

const lightGrayConfig = extendTheme(
  abstractThemeConfig,
  Object.assign(
    {},
    mediumDensityThemeConfig,
    mapKeys(system.colorScheme, key => `COLOR_SCHEME.${key}`),
    formField,
    input,
    label
  )
);

export default lightGrayConfig;
