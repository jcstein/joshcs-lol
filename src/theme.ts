import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  components: {
    Link: {
      variants: {
        primary: ({ colorScheme = "purple" }) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.400`,
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
