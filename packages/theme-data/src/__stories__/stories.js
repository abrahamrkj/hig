import baseTheme from "../themes/baseTheme";
import basicsReadme from "../basics/README.md";
import densityReadme from "./DENSITY_README.md";
import colorSchemeReadme from "./COLOR_SCHEME_README.md";

function filterMatchByKey(o, keyFragment) {
  return Object.keys(o).reduce((acc, key) => {
    if (key.match(keyFragment)) {
      return { ...acc, [key]: o[key] };
    }
    return acc;
  }, {});
}

export default [
  {
    description: "Basics - Border radii",
    schema: filterMatchByKey(baseTheme, "BASICS.BORDER_RADII"),
    readme: basicsReadme
  },
  {
    description: "Basics - Border widths",
    schema: filterMatchByKey(baseTheme, "BASICS.BORDER_WIDTHS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Colors",
    schema: filterMatchByKey(baseTheme, "BASICS.COLORS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font families",
    schema: filterMatchByKey(baseTheme, "BASICS.FONT_FAMILIES"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font sizes",
    schema: filterMatchByKey(baseTheme, "BASICS.FONT_SIZES"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font weights",
    schema: filterMatchByKey(baseTheme, "BASICS.FONT_WEIGHTS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Line heights",
    schema: filterMatchByKey(baseTheme, "BASICS.LINE_HEIGHTS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Shadows",
    schema: filterMatchByKey(baseTheme, "BASICS.SHADOWS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Spacings",
    schema: filterMatchByKey(baseTheme, "BASICS.SPACINGS"),
    readme: basicsReadme
  },
  {
    description: "Color scheme",
    schema: filterMatchByKey(baseTheme, "COLOR_SCHEME"),
    readme: colorSchemeReadme
  },
  {
    description: "Density",
    schema: filterMatchByKey(baseTheme, "DENSITY"),
    readme: densityReadme
  },
  {
    description: "Component - Checkbox",
    schema: filterMatchByKey(baseTheme, /^CHECKBOX./),
    readme: undefined
  },
  {
    description: "Component - Forms",
    schema: filterMatchByKey(baseTheme, /^FORM_FIELD./),
    readme: undefined
  },
  {
    description: "Component - Input",
    schema: filterMatchByKey(baseTheme, /^INPUT./),
    readme: undefined
  },
  {
    description: "Component - Label",
    schema: filterMatchByKey(baseTheme, /^LABEL./),
    readme: undefined
  },
  {
    description: "Component - Menu",
    schema: filterMatchByKey(baseTheme, /^MENU./),
    readme: undefined
  },
  {
    description: "Component - Text area",
    schema: filterMatchByKey(baseTheme, /^TEXT_AREA./),
    readme: undefined
  }
];
