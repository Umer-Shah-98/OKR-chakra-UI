import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export const UpgradePlanBanner = () => {
  return (
    <Box
      className="upgrade-plan-banner"
      h={"12vh"}
      backgroundColor={"brand.blue"}
      w={"100%"}
      borderRadius={"8px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"0px 25px"}
    >
      <Box>
        <Text fontFamily={"Outfit"} fontSize={"1.3rem"} color={"white"}>
          Want to level up your multiple business with more
        </Text>
        <Text fontFamily={"Outfit"} fontSize={"1.3rem"} color={"white"}>
          Agents
        </Text>
      </Box>
      <Button borderRadius={"full"} background={"#ffffff"}>
        Upgrade Plan
      </Button>
    </Box>
  );
};
