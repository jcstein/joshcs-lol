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
import { FaSeedling } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { Gi3DGlasses } from "react-icons/gi";

export const Projects = () => {
  return (
    <>
    <VStack align="start" maxWidth="800px" mx="auto" width="100%">
      <Heading size="lg" textAlign="left" pt="3">
        Projects, tutorials, and presentations 🛸
      </Heading>
      <Heading size="md" textAlign="left" pt="3">
        Projects
      </Heading>
      <Link href="https://celestia.cool" isExternal textAlign="left">
        celestia.cool - a Celestia mempool visualization
      </Link>
      <Link href="https://www.npmjs.com/package/light-nodes/" isExternal textAlign="left">
        light-nodes - an NPM package for using celestia-node
      </Link>
      <Link href="https://quazarapp.xyz/" isExternal textAlign="left">
        Quazar - a Celestia light node client for macOS
      </Link>
      <Link href="https://moveyourcar.vercel.app/" isExternal textAlign="left">
        moveyourcar.lol - a bot to send you parking notifications near you
      </Link>
      <Link href="pessimistic-loogies.surge.sh/" isExternal textAlign="left">
        An implementation of Scaffold-ETH Optimistic Loogies on a rollup
      </Link>
      <Link href="https://screennames.vercel.app/" isExternal textAlign="left">
        Screen Names - a lightweight app to help you rename screenshots on macOS
      </Link>
      <Flex pb="3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=YbMX42ILtLA"
          width="100%"
          height="100%"
          controls={true}
        />
      </Flex>
      <Link href="https://buildmarket.xyz/" isExternal textAlign="left">
        build market - NFT marketplace on Goerli built with thirdweb
      </Link>
      <Link href="https://based64.xyz/" isExternal textAlign="left">
        Base64 SVG tutorial with Celestia
      </Link>
      <Link href="https://bitkit.dev/" isExternal textAlign="left">
        Bitcoin + Rollkit + EVM demo - Bitkit.dev
      </Link>
      <Link href="https://saymoo.eth.limo/" isExternal textAlign="left">
        Celestia EVM rollup demo - Say Moo
      </Link>
      <Link href="https://buildmarket.eth.limo/" isExternal textAlign="left">
        Celestia EVM rollup demo - GM Portal
      </Link>
      <Link href="https://bundlr-js.vercel.app/" isExternal textAlign="left">
        Bundlr JS demo uploader
      </Link>
      <Link href="https://r3sum3-2.vercel.app/" isExternal textAlign="left">
        R3sume - my resume as an NFT
      </Link>
      <Link href="https://probablynothing.ink/" isExternal textAlign="left">
        thirdweb + rainbowkit + wagmi + vite ERC-1155 minting site
      </Link>
      <Link href="https://vite-tree.vercel.app" isExternal textAlign="left">
        Vite Tree - DIY React Linketree with Chakra UI
      </Link>
      <Link
        href="https://vite-tailwind-starter-two.vercel.app/"
        isExternal
        textAlign="left"
      >
        Vite Tailwind Starter Repository
      </Link>
      <Link href="https://rainbowkit.me" isExternal textAlign="left">
        RainbowKit Starter (Vite + React + Tailwind CSS)
      </Link>
      <Link href="https://multichain-gallery-ankr.vercel.app" isExternal textAlign="left">
        Multichain NFT Gallery
      </Link>
      <Link href="https://payg-calc.vercel.app" isExternal textAlign="left">
        Ankr Pay-as-you-go Calculator
      </Link>
      <Link href="https://joshcs.xyz/detools" isExternal textAlign="left">
        My List of Decentralized Tooling
      </Link>
      <Link
        href="https://www.web3con.dev/2022-recap"
        isExternal
        textAlign="left"
      >
        web3con by DeveloperDAO
      </Link>
      <Link href="https://xp-radio.vercel.app/" isExternal textAlign="left">
        XP Radio Linktree-style Chakra UI + React
      </Link>
      <Link
        href="https://speedrunethereum.com/builders/0x186Ea56F0a40c5593A697B3E804968b8C5920Ff3"
        isExternal
        textAlign="left"
      >
        SpeedRunEthereum.com
      </Link>
      <Text textAlign="left">
        <Link
          href="https://solidity-keyboard-generator.vercel.app/"
          isExternal
          textAlign="left"
        >
          pointer.gg - Solidity Keyboard Generator
        </Link>{" "}
        <Link
          href="https://github.com/jcstein/solidity-keyboard-generator"
          isExternal
          textAlign="left"
        >
          (GitHub)
        </Link>
      </Text>
      <Text textAlign="left">
        <Link
          href="https://enter.wellnessdao.xyz/"
          isExternal
          textAlign="left"
        >
          buildspace - Wellness DAO, build your own DAO
        </Link>{" "}
        <Link
          href="https://github.com/jcstein/buildspace-dao-starter"
          isExternal
          textAlign="left"
        >
          (GitHub)
        </Link>{" "}
        <Link href="https://www.wellnessdao.xyz/" isExternal textAlign="left">
          Wellness DAO V2
        </Link>{" "}
        <Link
          href="http://wellness-dao.vercel.app/"
          isExternal
          textAlign="left"
        >
          Wellness DAO V1
        </Link>
      </Text>
      <Text textAlign="left">
        <Link href="https://nft-drop-starter-project-pink.vercel.app/" isExternal textAlign="left">
          buildspace - Blockify Solana NFT collection
        </Link>{" "}
        <Link
          href="https://github.com/jcstein/nft-drop-starter-project"
          isExternal
          textAlign="left"
        >
          (GitHub)
        </Link>
      </Text>
      <Link href="https://blockify.vercel.app/" isExternal textAlign="left">
        Blockify Concept
      </Link>
      <Text textAlign="left">
        <Link href="https://solana.jcstein.dev/" isExternal textAlign="left">
          buildspace - Solana dApp
        </Link>{" "}
        <Link
          href="https://replit.com/@jcstein/solana?v=1"
          isExternal
          textAlign="left"
        >
          (Replit)
        </Link>
      </Text>
      <Text textAlign="left">
        <Link href="https://game.jcstein.dev/" isExternal textAlign="left">
          buildspace - playable NFTs
        </Link>{" "}
        <Link
          href="https://replit.com/@jcstein/bosshroom?v=1"
          isExternal
          textAlign="left"
        >
          (Replit)
        </Link>
      </Text>
      <Text textAlign="left">
        <Link href="https://minting.jcstein.dev/" isExternal textAlign="left">
          buildspace - minting site
        </Link>{" "}
        <Link
          href="https://replit.com/@jcstein/lattice-supply?v=1"
          isExternal
          textAlign="left"
        >
          (Replit)
        </Link>
      </Text>
      <Text textAlign="left">
        <Link href="https://web3.jcstein.dev/" isExternal textAlign="left">
          buildspace - intro to web3
        </Link>{" "}
        <Link
          href="https://replit.com/@jcstein/veggie-portal?v=1"
          isExternal
          textAlign="left"
        >
          (Replit)
        </Link>
      </Text>
      <Text textAlign="left">
        <Link
          href="https://sequoiavans.gatsbyjs.io/"
          isExternal
          textAlign="left"
        >
          Sequoia Vans, i18n demo
        </Link>{" "}
        <Link
          href="https://github.com/jcstein/sequoia-vans"
          isExternal
          textAlign="left"
        >
          (GitHub)
        </Link>
      </Text>
      <Link href="https://3slr.vercel.app" isExternal textAlign="left">
        3SLR Zora Demo
      </Link>
      <Link href="https://issnlnewtonight.com/" isExternal textAlign="left">
        Is SNL New Tonight?
      </Link>
      </VStack>
      <Divider />
      <Heading size="md" textAlign="center" pt="3">
        Presentations
      </Heading>
      <Link href="https://consensus2024.coindesk.com/agenda/event/-how-to-build-whatever-389" isExternal textAlign="center">
        How to Build Whatever (Consensus 2024)
      </Link>
      <Flex pb="3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ruXxChTdLzo"
          width="100%"
          height="100%"
          controls={true}
        />
      </Flex>
      <Flex pb="3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=VQ8dOjPWppo"
          width="100%"
          height="100%"
          controls={true}
        />
      </Flex>
      <Flex pb="3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=3kLuHOJariY"
          width="100%"
          height="100%"
          controls={true}
        />
      </Flex>
      <Flex pb="3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=_9DCV23CJV0"
          width="100%"
          height="100%"
          controls={true}
        />
      </Flex>
      <Flex pb="3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=nucX0pLY9JA"
          width="100%"
          height="100%"
          controls={true}
        />
      </Flex>
      <Flex pb="3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=KWijOhR5HEU"
          width="100%"
          height="100%"
          controls={true}
        />
      </Flex>
      <Flex pb="3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LS0rqL6Zp1A"
          width="100%"
          height="100%"
          controls={true}
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
      <Link href="https://paragraph.xyz/@jcs" isExternal>
        Paragraph
      </Link>
      <Link href="https://mirror.xyz/joshcstein.eth" isExternal>
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
        Art galleries
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
        Old portfolio sites
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
    </>
  );
};
