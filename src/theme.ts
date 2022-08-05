import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const fonts = {
  heading: `"Inter", sans-serif`,
  body: `"Inter", sans-serif`,
};

const theme = extendTheme({
  config,
  fonts,
  components: {
    Link: {
      variants: {
        primary: ({ colorScheme = "purple" }) => ({
          color: `${colorScheme}.600`,
          _hover: {
            color: `${colorScheme}.800`,
          },
          _dark: {
            color: `${colorScheme}.200`,
            _hover: {
              color: `${colorScheme}.500`,
            },
          },
        }),
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },
});

export default theme;
