import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import NotificationIcon from "../../assets/images/notification-icon.png";
import ProfileIcon from "../../assets/images/profile-icon.png";
export const Navbar = () => {
  return (
    <Box
      className="navbar"
      //   backgroundColor={"red"}
      w={"100%"}
      h={"8vh"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"0px 25px"}
    >
      <Text
        fontSize={"1.5rem"}
        color={"brand.orange"}
        fontWeight={"500"}
        fontFamily={"Outfit"}
      >
        My Agents
      </Text>
      <Box className="action-buttons" display={"flex"} gap={3}>
        <Menu>
          <MenuButton
            as={Button}
            borderRadius={"full"}
            padding={"5px 20px"}
            backgroundColor={"brand.blue"}
          >
            Free Plan
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} backgroundColor={"transparent"}>
            <img
              src={NotificationIcon}
              alt="notification-icon"
              width={"20px"}
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} backgroundColor={"transparent"}>
            <img src={ProfileIcon} alt="profile-icon" width={"20px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
