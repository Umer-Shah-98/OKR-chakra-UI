import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";

export const AgentUsageBox = ({ name, progress, allowed, used }) => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      fontFamily={"Outfit"}
      gap={2}
    >
      <Box className="usage-name">
        <Text fontSize={"12px"}>{name}</Text>
      </Box>
      {progress && (
        <Box className="progress-bar" w={"60px"}>
          <Progress height="5px" value={progress} borderRadius={"full"} />
        </Box>
      )}
      <Box className="usage-numbers">
        {progress ? (
          <Text fontSize={"12px"}>
            {used}/{allowed}
          </Text>
        ) : (
          <Text fontSize={"12px"}>{used}</Text>
        )}
      </Box>
    </Flex>
  );
};
