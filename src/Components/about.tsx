import { Avatar, Heading, Text, Link, Divider, VStack } from "@chakra-ui/react";

export const About = () => {
  return (
    <VStack>
      <Heading pb="3">gm, I'm joshcs.eth!</Heading>
      <Avatar src="/jcs.jpeg" mx="auto" size="2xl" />
      <Heading size="sm" pb="3" textAlign="center" pt="3">
        Thank you for stopping by my site 😄
      </Heading>
      <Divider />
      <Heading size="md" textAlign="center" pt="3">
        About Me
      </Heading>
      <Text textAlign="center">
        I&#39;m currently a Developer Relations Engineer at{" "}
        <Link href="https://ankr.com" isExternal>
          ankr.com
        </Link>{" "}
        and an active contributor to{" "}
        <Link href="https://developerdao.com" isExternal>
          Developer DAO
        </Link>{" "}
        and{" "}
        <Link href="https://peeple.work" isExternal>
          Peeple DAO
        </Link>
        .
      </Text>
      <Text textAlign="center">
        Previously, I was a teaching assistant with{" "}
        <Link href="https://buildspace.so">buildspace</Link> - you can see my
        buildspace profile{" "}
        <Link href="buildspace.so/@josh" isExternal>
          @josh
        </Link>{" "}
        🦄
      </Text>
      <Text textAlign="center">
        I am also a co-founder of{" "}
        <Link href="https://lattice.supply">Lattice Supply</Link> ♻️🛹 and
        founder of <Link href="https://wellnessdao.xyz">wellnessdao.xyz</Link>{" "}
        🧠
      </Text>
    </VStack>
  );
};
