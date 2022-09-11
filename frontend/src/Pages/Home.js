import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignUp from "../Components/Authentication/Sign-up";
import Login from "../Components/Authentication/Login";
import React from "react";
const Home = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"var(--greenColor)"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="4px"
        fontStyle="italic"
      >
        <Text fontSize="3xl" color={"var(--blackColor)"} textAlign="center">
          Chat0*
        </Text>
      </Box>
      <Box
        bg={"var(--lightBlackColor)"}
        w="100%"
        borderRadius="4px"
        color={"var(--blackColor)"}
        p={4}
        opacity="0.8"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em" borderColor="var(--orangeColor)">
            <Tab
              _selected={{
                color: "var(--textColor)",
                bg: "var(--orangeColor)",
              }}
              color="var(--textColor)"
              fontSize="1.5em"
            >
              Login
            </Tab>
            <Tab
              color="var(--textColor)"
              _selected={{
                color: "var(--textColor)",
                bg: "var(--orangeColor)",
              }}
              fontSize="1.5em"
            >
              Sign-up
            </Tab>
          </TabList>
          <TabPanels color="var(--textColor)">
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
export default Home;
