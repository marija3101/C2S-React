import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./commponents/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Flex height="85vh">
        <Sidebar />
        <Box bgColor="white" width="85%" />
      </Flex>
      <Flex height="15vh" bgColor="gray.800" />
    </div>
  );
};

export default App;
