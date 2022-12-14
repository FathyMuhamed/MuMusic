import { Box } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

const PlayerLayout = ({ children }) => {
  return (
    <Box width='100vw' height='100vh'>
      <Box position='absolute' top='0' width='250px' left='0'>
        SideBar
      </Box>
      <Box marginLeft='25px' marginBottom='100px'>
        {children}
      </Box>
      <Box position='absolute' left='0' bottom='0'>
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
