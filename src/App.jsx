import { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  PinInput,
  PinInputField,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import "./App.css";
import { Layout } from "./layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
