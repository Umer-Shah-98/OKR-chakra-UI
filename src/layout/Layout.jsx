import {
  Box,
  Button,
  Container,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../components/drawer/Sidebar";
import { Navbar } from "../components/navbar/Navbar";
import { UpgradePlanBanner } from "../components/upgrade-plan-banner/UpgradePlanBanner";
import { MyAgents } from "../pages/MyAgents";

export const Layout = () => {
  return (
    <Box display={"flex"} flex={1} h={"100%"}>
      <Sidebar />
      <Box className="right-side" w={"100%"} h={"100%"}>
        <Navbar />
        <Container maxW={"container.lg"}>
          <Box className="main-box" my={"5vh"} w={"100%"}>
            <MyAgents />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
