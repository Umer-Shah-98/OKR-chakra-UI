import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AgentUsageBox } from "../agent-usage-box/AgentUsageBox";
import AgentIcon from "../../assets/images/chatbot-png-icon.png";
import MenuIcon from "../../assets/images/DotIcon.png";
export const AgentCard = ({ agentName }) => {
  return (
    <GridItem>
      <Card maxW="300px" borderRadius={"8px"} fontFamily={"Outfit"}>
        <CardHeader
          backgroundColor={"brand.orange"}
          h={"20vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"8px"}
        >
          <Box
            className="agent-icon-box"
            w={"100px"}
            backgroundColor={"white"}
            borderRadius={"full"}
            overflow={"hidden"}
          >
            <img src={AgentIcon} alt="Agent Icon" />
          </Box>
        </CardHeader>
        <CardBody padding={"20px"}>
          <Flex
            justify={"space-between"}
            align={"center"}
            fontFamily={"Outfit"}
          >
            <Text>{agentName}</Text>
            <Box>
              <Text
                background={"#30cd30"}
                borderRadius={"full"}
                padding={"2px 12px"}
                fontSize={"12px"}
                color={"white"}
              >
                active
              </Text>
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                backgroundColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
                _active={{ backgroundColor: "transparent" }}
              >
                <img src={MenuIcon} alt="notification-icon" width={"4px"} />
              </MenuButton>
              <MenuList>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Inactive</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Stack gap={3} mt={5}>
            <AgentUsageBox
              name={"Message Usage"}
              progress={60}
              allowed={20000}
              used={1000}
            />
            <AgentUsageBox
              name={"Characters Usage"}
              progress={60}
              allowed={200000}
              used={10000}
            />
            <AgentUsageBox
              name={"Chat Responses"}
              // progress={60}
              allowed={200000}
              used={10000}
            />
          </Stack>
        </CardBody>
        <CardFooter padding={"20px"}>
          <ButtonGroup spacing="10">
            <Menu>
              <MenuButton
                as={Button}
                variant="solid"
                backgroundColor="brand.blue"
                borderRadius={"full"}
                color={"white"}
                fontSize={"12px"}
                padding={"0px 20px"}
                height={"30px"}
                _hover={{ backgroundColor: "brand.blue" }}
                _active={{ backgroundColor: "brand.blue" }}
              >
                Customize
              </MenuButton>
              <MenuList>
                <MenuItem>Customize Agent</MenuItem>
                <MenuItem>Update Agent</MenuItem>
              </MenuList>
            </Menu>
            <Button
              variant="solid"
              color="brand.blue"
              backgroundColor="white"
              borderRadius={"full"}
              fontSize={"12px"}
              border={"1px solid"}
              height={"30px"}
              _hover={{ backgroundColor: "white" }}
              _active={{ backgroundColor: "white" }}
            >
              See Details
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
  );
};
