import React from "react";
import PropTypes from "prop-types";
import KnobbedThemeProvider, {
  THEMES
} from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import DefaultExport from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, theme, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider
      supportedThemes={[THEMES.LIGHT_GRAY, THEMES.WEB_LIGHT, THEMES.DARK_BLUE]}
    >
      <DefaultExport {...otherProps}>{children}</DefaultExport>
    </KnobbedThemeProvider>
  );
}

renderStory.propTypes = {
  children: PropTypes.node
};
