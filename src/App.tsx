import { Avatar, VStack, Link, Divider, Text } from "@chakra-ui/react";
import { Buttons } from "./Components/buttons";
import { About } from "./Components/about";
import { Projects } from "./Components/projects";

function App() {
  return (
    <div>
      <Buttons />
      <VStack p="7">
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Link href="/" pt="8">
          <Avatar src="/jcs.png" mx="auto" size="md" />
        </Link>
        <Text>
          This website is{" "}
          <Link href="https://github.com/jcstein/joshcs-lol" isExternal>
            open-source
          </Link>
        </Text>
      </VStack>
    </div>
  );
}

export default App;
