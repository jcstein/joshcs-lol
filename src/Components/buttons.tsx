import { IconButton, Flex, HStack } from "@chakra-ui/react";
import { FaMoon, FaSun, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

export const Buttons = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center" justify="end">
      <HStack pt="3" pr="5">
        <IconButton
          colorScheme="purple"
          onClick={() =>
            window.open("https://linkedin.com/in/joshcstein", "_blank")
          }
          aria-label={`Follow Josh Stein on GitHub`}
        >
          <FaLinkedin />
        </IconButton>
        <IconButton
          colorScheme="purple"
          onClick={() =>
            window.open("https://twitter.com/JoshCStein", "_blank")
          }
          aria-label={`Follow @JoshCStein on Twitter`}
        >
          <FaTwitter />
        </IconButton>
        <IconButton
          colorScheme="purple"
          onClick={() => window.open("https://github.com/jcstein", "_blank")}
          aria-label={`Follow @jcstein on GitHub`}
        >
          <FaGithub />
        </IconButton>
        <IconButton
          onClick={toggleColorMode}
          aria-label={`Switch from ${colorMode} mode`}
        >
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </IconButton>
      </HStack>
    </Flex>
  );
};
