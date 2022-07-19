import {
  Avatar,
  Heading,
  Text,
  VStack,
  IconButton,
  Flex,
  HStack,
  Link,
  Divider,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex align="center" justify="end">
        <HStack p="2" pr="5">
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
      <VStack p="10">
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
        <Divider />
        <Heading size="md" textAlign="center" pt="3">
          Projects and articles I've shipped recently 🛸
        </Heading>
        <Heading size="sm" textAlign="center" pt="3">
          Projects
        </Heading>
        <Link href="https://rainbowkit.me" isExternal textAlign="center">
          RainbowKit Starter (Vite + React + Tailwind CSS)
        </Link>
        <Link href="https://multichain.gallery" isExternal textAlign="center">
          Multichain NFT Gallery
        </Link>
        <Link href="https://payg-calc.vercel.app" isExternal textAlign="center">
          Ankr Pay-as-you-go Calculator
        </Link>
        <Link href="https://joshcs.xyz/detools" isExternal textAlign="center">
          My List of Decentralized Tooling
        </Link>
        <Link
          href="https://www.web3con.dev/2022-recap"
          isExternal
          textAlign="center"
        >
          web3con by DeveloperDAO
        </Link>
        <Link
          href="https://speedrunethereum.com/builders/0x186Ea56F0a40c5593A697B3E804968b8C5920Ff3"
          isExternal
          textAlign="center"
        >
          SpeedRunEthereum.com
        </Link>
        <Text textAlign="center">
          <Link
            href="https://solidity-keyboard-generator.vercel.app/"
            isExternal
            textAlign="center"
          >
            pointer.gg - Solidity Keyboard Generator
          </Link>{" "}
          <Link
            href="https://github.com/jcstein/solidity-keyboard-generator"
            isExternal
            textAlign="center"
          >
            (GitHub)
          </Link>
        </Text>
        <Text textAlign="center">
          <Link
            href="https://enter.wellnessdao.xyz/"
            isExternal
            textAlign="center"
          >
            buildspace - build your own DAO
          </Link>{" "}
          <Link
            href="https://github.com/jcstein/buildspace-dao-starter"
            isExternal
            textAlign="center"
          >
            (GitHub)
          </Link>
        </Text>
        <Text textAlign="center">
          <Link
            href="https://mint.blockify.shop/"
            isExternal
            textAlign="center"
          >
            buildspace - solana NFT collection
          </Link>{" "}
          <Link
            href="https://github.com/jcstein/nft-drop-starter-project"
            isExternal
            textAlign="center"
          >
            (GitHub)
          </Link>
        </Text>
        <Text textAlign="center">
          <Link
            href="https://solana.jcstein.dev/"
            isExternal
            textAlign="center"
          >
            buildspace - Solana dApp
          </Link>{" "}
          <Link
            href="https://replit.com/@jcstein/solana?v=1"
            isExternal
            textAlign="center"
          >
            (Replit)
          </Link>
        </Text>
        <Text textAlign="center">
          <Link href="https://game.jcstein.dev/" isExternal textAlign="center">
            buildspace - playable NFTs
          </Link>{" "}
          <Link
            href="https://replit.com/@jcstein/bosshroom?v=1"
            isExternal
            textAlign="center"
          >
            (Replit)
          </Link>
        </Text>
        <Text textAlign="center">
          <Link
            href="https://minting.jcstein.dev/"
            isExternal
            textAlign="center"
          >
            buildspace - minting site
          </Link>{" "}
          <Link
            href="https://replit.com/@jcstein/lattice-supply?v=1"
            isExternal
            textAlign="center"
          >
            (Replit)
          </Link>
        </Text>
        <Text textAlign="center">
          <Link href="https://web3.jcstein.dev/" isExternal textAlign="center">
            buildspace - intro to web3
          </Link>{" "}
          <Link
            href="https://replit.com/@jcstein/veggie-portal?v=1"
            isExternal
            textAlign="center"
          >
            (Replit)
          </Link>
        </Text>
        <Text textAlign="center">
          <Link
            href="https://sequoiavans.gatsbyjs.io/"
            isExternal
            textAlign="center"
          >
            Sequoia Vans, i18n demo
          </Link>{" "}
          <Link
            href="https://github.com/jcstein/sequoia-vans"
            isExternal
            textAlign="center"
          >
            (GitHub)
          </Link>
        </Text>
        <Divider />
        <Heading size="sm" textAlign="center" pt="3">
          Tutorials
        </Heading>
        <Link
          href="https://ankr.hashnode.dev/how-to-deploy-your-first-polygon-nft-with-an-erc-721-solidity-smart-contract-and-ankr"
          isExternal
          textAlign="center"
        >
          How to Deploy Your First Polygon NFT with an ERC-721 Solidity Smart
          Contract and Ankr
        </Link>
        <Link
          href="https://ankr.hashnode.dev/how-to-deploy-an-erc-721-smart-contract-to-avalanche-and-mint-an-nft-with-ankr-hardhat-and-ethersjs"
          isExternal
          textAlign="center"
        >
          How to Deploy an ERC-721 Smart Contract to Avalanche and Mint an NFT
          with Ankr, Hardhat, and Ethers.js 🔺
        </Link>
        <Link
          href="https://ankr.hashnode.dev/deploy-a-dapp-with-rainbowkit-ankr-react-and-chakra-ui"
          isExternal
          textAlign="center"
        >
          Deploy a dApp with RainbowKit, Ankr, React, and Chakra-UI
        </Link>
        <Text textAlign="center">
          <Link
            href="https://blog.jcstein.dev/how-to-set-up-your-own-solana-pay-point-of-sale-pos-app"
            isExternal
            textAlign="center"
          >
            How to Set Up your own Solana Pay PoS
          </Link>{" "}
          <Link
            href="https://solana-pay-lyart.vercel.app/new?recipient=8efRxx3LBzXSPFwFj2UgvCsfJjfEkRxDdw2AtUi61Jtb&label=store+name"
            isExternal
            textAlign="center"
          >
            (Live Demo)
          </Link>
        </Text>
        <Divider />
        <Heading size="sm" textAlign="center" pt="3">
          Writing
        </Heading>
        <Link href="https://mirror.xyz/joshcs.eth" isExternal>
          Mirror
        </Link>
        <Link href="https://hashnode.com/@jcstein" isExternal>
          Hashnode
        </Link>
        <Link href="https://blog.jcstein.dev" isExternal>
          Blog
        </Link>
        <Divider />
        <Heading size="sm" textAlign="center" pt="3">
          Art Galleries
        </Heading>
        <Link href="https://deca.art/joshcs/fr33styl3" isExternal>
          deca.art/joshcs
        </Link>
        <Link href="https://oncyber.io/joshstein" isExternal>
          oncyber
        </Link>
        <Link href="https://doingud.com/@joshcs?tab=collected" isExternal>
          DoinGud
        </Link>
        <Divider />
        <Heading size="sm" textAlign="center" pt="3">
          Old Portfolio Sites
        </Heading>
        <Link href="https://joshcs.xyz/" isExternal>
          joshcs.xyz
        </Link>
        <Link href="https://jcstein.dev/" isExternal>
          jcstein.dev
        </Link>
        <Link href="https://jcstein.com/" isExternal pb="3">
          jcstein.com
        </Link>
        <Divider />
        <Link href="/" pt="8">
          <Avatar src="/jcs.png" mx="auto" size="md" />
        </Link>
      </VStack>
    </div>
  );
}

export default App;
