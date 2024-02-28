import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="#222"
        color="antiquewhite"
        w="100%"
        m="40px 0 15px 0"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Chat.io
        </Text>
      </Box>
      <Box bg="#222" color="antiquewhite" w="100%" p={4}>
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab bgColor="transparent" color="antiquewhite">Login</Tab>
            <Tab bgColor="transparent" color="antiquewhite">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
