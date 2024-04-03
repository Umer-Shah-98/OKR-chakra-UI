import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import React from "react";
export const NavItem = ({ navSize, title, icon, active }) => {
  return (
    <Flex
      flexDir="column"
      mt={5}
      w={"100%"}
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active ? "brand.orange" : "transparent"}
          _hover={{ backgroundColor: "brand.orange", textDecoration: "none" }}
          p={3}
          borderRadius={8}
          w={navSize === "large" && "100%"}
        >
          <MenuButton w={"100%"}>
            <Flex
              alignItems={"center"}
              justifyContent={"flex-start"}
              ml={navSize === "small" ? 0 : 5}
            >
              <Icon
                as={icon}
                fontSize={"lg"}
                color={active && "white"}
                _hover={{ color: "white" }}
              />
              <Text
                color={active && "white"}
                ml={5}
                display={navSize === "small" ? "none" : "block"}
                fontSize={"14px"}
                _hover={{ color: "white" }}
                fontFamily={"Outfit"}
                fontWeight={"normal"}
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};
