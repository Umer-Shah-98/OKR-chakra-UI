import React, { useState } from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  IconButton,
  Divider,
  Avatar,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoMdHome } from "react-icons/io";
import { TbMessageChatbot } from "react-icons/tb";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";

import profilePic from "../../assets/images/Umer-Shah-pic-2.jpg";
import LogoIcon from "../../assets/images/chatbot-png-icon.png";
import { NavItem } from "../nav-item/NavItem";
const sidebarButtons = [
  {
    title: "Dashboard",
    icon: IoMdHome,
    route: "/dashboard",
    active: false,
  },
  {
    title: "Agents",
    icon: TbMessageChatbot,
    route: "/my-agents",
    active: true,
  },
  {
    title: "Account",
    icon: MdOutlineSupervisorAccount,
    route: "/account",
    active: false,
  },
  {
    title: "Subscriptions",
    icon: MdOutlineSubscriptions,
    route: "/subscriptions",
    active: false,
  },
  {
    title: "Need Help?",
    icon: IoMdHelpCircleOutline,
    route: "/help",
    active: false,
  },
];
export const Sidebar = () => {
  const btnRef = React.useRef();
  const [navSize, setNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      // left="5"
      // height="100%"
      // marginTop="2.5vh"
      boxShadow="lg"
      w={navSize === "small" ? "80px" : "250px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as={"nav"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          w="100%"
          mt={5}
        >
          <Avatar size={navSize === "small" ? "sm" : "md"} src={LogoIcon} />

          <Heading
            as="h4"
            size={"sm"}
            color={"#FF8C7D"}
            display={navSize === "small" ? "none" : "flex"}
          >
            Spoky
          </Heading>
          <IconButton
            icon={<HamburgerIcon />}
            background={"none"}
            _hover={{ background: "none" }}
            onClick={() => {
              if (navSize === "large") {
                setNavSize("small");
              } else setNavSize("large");
            }}
          />
        </Flex>
        {sidebarButtons.map((item, index) => (
          <NavItem
            key={index}
            navSize={navSize}
            title={item.title}
            icon={item.icon}
            route={item.route}
            active={item?.active}
          />
        ))}
      </Flex>
      <Flex
        p="5%"
        w="100%"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} alignItems={"center"}>
          <Avatar size={navSize === "small" ? "md" : "lg"} src={profilePic} />
          <Flex
            flexDir={"column"}
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size={"sm"}>
              Umer Shah
            </Heading>
            <Text color={"gray.500"}>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
