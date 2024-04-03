import React from "react";
import { UpgradePlanBanner } from "../components/upgrade-plan-banner/UpgradePlanBanner";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import AgentIcon from "../assets/images/chatbot-png-icon.png";
import MenuIcon from "../assets/images/DotIcon.png";
import { AgentUsageBox } from "../components/agent-usage-box/AgentUsageBox";
import { AgentCard } from "../components/agent-card/AgentCard";
export const MyAgents = () => {
  const agents = [
    { name: "Agent-1" },
    { name: "Agent-2" },
    { name: "Agent-3" },
    { name: "Agent-4" },
    { name: "Agent-5" },
  ];
  return (
    <Box>
      <UpgradePlanBanner />
      <Box className="agents-cards-box" mt={10}>
        <Grid w={"100%"} templateColumns="repeat(3, 1fr)" gap={10}>
          {agents?.map((agent) => (
            <AgentCard agentName={agent.name} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
