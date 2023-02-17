import {
  Heading,
  Text,
  Link,
  Divider,
  VStack,
  Flex,
  Button,
  Image,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { FaTelegram, FaDiscord, FaSeedling } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { Gi3DGlasses } from "react-icons/gi";

export const Projects = () => {
  return (
    <VStack>
      <Heading size="lg" textAlign="center" pt="3">
        Projects, Tutorials, and Presentations 🛸
      </Heading>
      <Heading size="md" textAlign="center" pt="3">
        Projects
      </Heading>
      <Link href="https://saymoo.eth.limo/" isExternal textAlign="center">
        Celestia EVM rollup demo - Say Moo
      </Link>
      <Link href="https://buildmarket.eth.limo/" isExternal textAlign="center">
        Celestia EVM rollup demo - GM Portal
      </Link>
      <Link href="https://probablynothing.ink/" isExternal textAlign="center">
        thirdweb + rainbowkit + wagmi + vite ERC-1155 minting site
      </Link>
      <Link href="https://vitetree.xyz" isExternal textAlign="center">
        Vite Tree - DIY React Linketree with Chakra UI
      </Link>
      <Link
        href="https://vite-tailwind-starter-two.vercel.app/"
        isExternal
        textAlign="center"
      >
        Vite Tailwind Starter Repository
      </Link>
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
      <Link href="https://xp-radio.vercel.app/" isExternal textAlign="center">
        XP Radio Linktree-style Chakra UI + React
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
          buildspace - Wellness DAO, build your own DAO
        </Link>{" "}
        <Link
          href="https://github.com/jcstein/buildspace-dao-starter"
          isExternal
          textAlign="center"
        >
          (GitHub)
        </Link>{" "}
        <Link href="https://www.wellnessdao.xyz/" isExternal textAlign="center">
          Wellness DAO V2
        </Link>{" "}
        <Link
          href="http://wellness-dao.vercel.app/"
          isExternal
          textAlign="center"
        >
          Wellness DAO V1
        </Link>
      </Text>
      <Text textAlign="center">
        <Link href="https://mint.blockify.shop/" isExternal textAlign="center">
          buildspace - Blockify Solana NFT collection
        </Link>{" "}
        <Link
          href="https://github.com/jcstein/nft-drop-starter-project"
          isExternal
          textAlign="center"
        >
          (GitHub)
        </Link>
      </Text>
      <Link href="https://blockify.so/" isExternal textAlign="center">
        Blockify Concept
      </Link>
      <Text textAlign="center">
        <Link href="https://solana.jcstein.dev/" isExternal textAlign="center">
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
        <Link href="https://minting.jcstein.dev/" isExternal textAlign="center">
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
      <Link href="3slr.vercel.app" isExternal textAlign="center">
        3SLR Zora Demo
      </Link>
      <Link href="https://issnlnewtonight.com/" isExternal textAlign="center">
        Is SNL New Tonight?
      </Link>
      <Divider />
      <Heading size="md" textAlign="center" pt="3">
        Presentations
      </Heading>
      <Flex pb="3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=KWijOhR5HEU"
          width="100%"
          height="100%"
        />
      </Flex>
      <Flex pb="3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LS0rqL6Zp1A"
          width="100%"
          height="100%"
        />
      </Flex>
      <Text textAlign="center" fontSize="lg">
        Wagmi on Polygon with Rahat
      </Text>
      <Text textAlign="center" fontSize="sm" as="em">
        Interwebs on The YouTube
      </Text>
      <Text textAlign="center" fontSize="sm" pb="3">
        July 2022
      </Text>
      <Image
        src="./avalanchehouse.jpg"
        width="69%"
        maxW="500"
        rounded="3xl"
        alt="Josh CS Speaking in Los Angeles, California at LA Hacks 2022"
      />
      <Text textAlign="center" fontSize="lg">
        Deploy an ERC-721 Smart Contract and Mint NFT on Avalanche with Ankr
      </Text>
      <Text textAlign="center" fontSize="sm" as="em">
        Avalanche House - Berlin, Germany
      </Text>
      <Text textAlign="center" fontSize="sm" pb="3">
        May 2022
      </Text>
      <Image
        src="./metaversepanel.jpg"
        width="69%"
        maxW="500"
        rounded="3xl"
        alt="Josh CS Speaking in Los Angeles, California at LA Hacks 2022"
      />
      <Text textAlign="center" fontSize="lg">
        Metaverse Panel with Ankr, Microsoft, NVIDIA, and Meta
      </Text>
      <Text textAlign="center" fontSize="sm" as="em">
        LA Hacks @ UCLA - Los Angeles, California
      </Text>
      <Text textAlign="center" fontSize="sm" pb="3">
        April 2022
      </Text>
      <Image
        src="./lahacks.png"
        width="69%"
        maxW="500"
        rounded="3xl"
        alt="Josh CS POAP from Los Angeles, California at LA Hacks 2022"
      />
      <Text textAlign="center" fontSize="lg">
        How to Deploy an ERC-721 Contract and Mint Your First NFT - Workshop
      </Text>
      <Text textAlign="center" fontSize="sm" as="em">
        LA Hacks @ UCLA - Los Angeles, California
      </Text>
      <Text textAlign="center" fontSize="sm" pb="3">
        April 2022
      </Text>
      <Text textAlign="center" fontSize="lg">
        Ankr Hybrid Infrastructure
      </Text>
      <Text textAlign="center" fontSize="sm" as="em">
        ETH Dubai
      </Text>
      <Text textAlign="center" fontSize="sm" pb="3">
        March 2022
      </Text>
      <Image
        src="./jcsbcn.jpg"
        width="69%"
        maxW="500"
        rounded="3xl"
        alt="Josh CS Speaking in Barcelona, Spain at Avalanche Summit 2022"
      />
      <Text textAlign="center" fontSize="lg">
        Web3 Developer Tools: My Journey into Web3 and the Ankr Premium Plan
      </Text>
      <Text textAlign="center" fontSize="sm" as="em">
        Avalanche Summit - Barcelona, Spain
      </Text>
      <Text textAlign="center" fontSize="sm" pb="3">
        March 2022
      </Text>
      <Image
        src="./jcsbounties.png"
        width="69%"
        maxW="500"
        rounded="3xl"
        alt="Josh CS Speaking in Barcelona, Spain at Avalanche Summit 2022"
      />
      <Text textAlign="center" fontSize="lg">
        Avalanche Summit Hackathon Bounties
      </Text>
      <Text textAlign="center" fontSize="sm" as="em">
        Avalanche Summit - Barcelona, Spain
      </Text>
      <Text textAlign="center" fontSize="sm">
        March 2022
      </Text>
      <Divider />
      <Heading size="md" textAlign="center" pt="3">
        Tutorials
      </Heading>
      <Link
        href="https://ankr.hashnode.dev/how-to-deploy-your-first-polygon-nft-with-an-erc-721-solidity-mdart-contract-and-ankr"
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
      <Heading size="md" textAlign="center" pt="3">
        Writing
      </Heading>
      <Link href="https://mirror.xyz/hotjosh.eth" isExternal>
        Mirror
      </Link>
      <Link href="https://hashnode.com/@jcstein" isExternal>
        Hashnode
      </Link>
      <Link href="https://joshcs.substack.com" isExternal>
        Substack
      </Link>
      <Link href="https://blog.jcstein.dev" isExternal>
        Blog
      </Link>
      <Divider />
      <Heading size="lg" textAlign="center" pt="3">
        Design
      </Heading>
      <Link href=" https://www.behance.net/joshuastein" isExternal>
        Behance
      </Link>
      <Image
        src="./dd.png"
        width="69%"
        maxW="500px"
        rounded="full"
        alt="Vibes IRL D_D Design"
        pb="3"
      />
      <Image
        src="./pn.png"
        width="69%"
        maxW="500px"
        rounded="3xl"
        alt="Probably Nothing Design for Developer DAO Amsterdam Event"
        pb="3"
      />
      <Image
        src="./vibes.png"
        width="69%"
        maxW="500px"
        rounded="3xl"
        alt="Vibes IRL Design for Developer DAO Amsterdam Event"
      />
      <Divider />
      <Heading size="md" textAlign="center" pt="3">
        Art Galleries
      </Heading>
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<GrGallery />}
        onClick={() =>
          window.open("https://deca.art/joshcs/3", "_blank")
        }
        rounded="full"
      >
        Deca
      </Button>
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<Gi3DGlasses />}
        onClick={() => window.open("https://oncyber.io/joshstein", "_blank")}
        rounded="full"
      >
        oncyber
      </Button>
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<FaSeedling />}
        onClick={() =>
          window.open("https://doingud.com/@joshcs?tab=collected", "_blank")
        }
        rounded="full"
      >
        DoinGud
      </Button>
      <Divider />
      <Heading size="md" textAlign="center" pt="3">
        Join my Guild
      </Heading>
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<FaTelegram />}
        onClick={() => window.open("https://t.me/+qsb73nBcT1Q4MTBh", "_blank")}
        rounded="full"
      >
        Telegram
      </Button>
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<FaDiscord />}
        onClick={() => window.open("https://discord.gg/SXftmQ5BN8", "_blank")}
        rounded="full"
      >
        Discord
      </Button>
      <Divider />
      <Heading size="md" textAlign="center" pt="3">
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
    </VStack>
  );
};
