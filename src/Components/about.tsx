import { Avatar, Heading, Text, Link, Divider, VStack } from "@chakra-ui/react";

export const About = () => {
  return (
    <VStack align="start" maxWidth="800px" mx="auto" width="100%">
      <Heading pb="3">Hi, I'm Josh!</Heading>
      <Avatar src="/Josh_Stein.jpg" mx="auto" size="2xl" />
      <Heading size="md" pb="3" textAlign="left" pt="3">
        Thank you for stopping by my site 😄
      </Heading>
      <Divider />
      <Heading size="lg" textAlign="left" pt="3">
        About me
      </Heading>
      <Text textAlign="left">
        I&#39;m currently a Solutions Engineer at
        {" "}<Link href="https://celestia.org" isExternal>
          Celestia Labs
        </Link>. We're building the first modular blockchain network.
      </Text>
      <Text textAlign="left">
        I&#39;m also hanging out in{" "}
        <Link href="https://developerdao.com" isExternal>
          Developer DAO
        </Link>{" "}
        and{" "}
        <Link href="https://peeple.work" isExternal>
          Peeple DAO
        </Link>.
      </Text>
      <Text textAlign="left">
        Previously, I was a a Developer Relations Engineer at{" "}
        <Link href="https://ankr.com" isExternal>
          ankr.com
        </Link>{" "}
        and teaching assistant with{" "}
        <Link href="https://buildspace.so" isExternal>
          buildspace
        </Link>{" "}
        - you can see my buildspace profile{" "}
        <Link href="https://buildspace.so/@josh" isExternal>
          @josh
        </Link>{" "}
        🦄
      </Text>
      <Text textAlign="left">
        I am also a co-founder of{" "}
        <Link href="https://lattice.supply" isExternal>
          Lattice Supply
        </Link>{" "}
        ♻️ 🛹 and founder of{" "}
        <Link href="https://wellness-dao-2.vercel.app" isExternal>
          Wellness DAO
        </Link>{" "}
        🧠
      </Text>
    </VStack>
  );
};
