import React from "react";
import styled from "styled-components";
import Bodybox1 from "./Bodybox1";
import Bodybox2 from "./Bodybox2";
import Bodybox3 from "./Bodybox3";
import { Box } from "@mui/material";

function Bodycolorcomponent() {
  return (
    <Bodycolor>
      <Box 
      display="flex"
      flexDirection="column"
      alignItems="center">
      <Bodybox2></Bodybox2>
      </Box>
      
      <Box
        display="flex"
        justifyContent="flex-end" // 추가된 부분
        paddingRight={0.2}
        flexDirection="row" // 변경된 부분
        flexWrap="wrap" // 변경된 부분
      >
        <Bodybox1 />
        <Bodybox3 />
      </Box>
    </Bodycolor>
  );
}

const Bodycolor = styled.div`
  background-color: #f7f7f7;
  height: 100vh;
  width: 100%;
`;

export default Bodycolorcomponent;
