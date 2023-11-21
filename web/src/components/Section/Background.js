import React from "react";
import styled from "styled-components";
import Bodybox1 from "./Bodybox1";
import Bodybox2 from "./Bodybox2";
import Bodybox3 from "./Bodybox3";
import Youtubebox from "../Youtube/Youtubebox"
import Bodybox4 from "./Bodybox4";
import { Box } from "@mui/material";

function Bodycolorcomponent() {
  return (
    <Bodycolor>
      <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      >
      <Bodybox1></Bodybox1>
      </Box>

      <Box 
      display="flex"
      justifyContent="center" // 추가된 부분
      paddingRight={0.2}
      flexDirection="row"
      alignItems="center" // 왼쪽 정렬
      flexWrap="wrap" // 변경된 부분
      >
        <Youtubebox/>
        <Bodybox2 />
        <Bodybox3 />
      </Box>
      <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      >
      <Bodybox4/>
      </Box>
    </Bodycolor>
  );

}

const Bodycolor = styled.div`

  background-color: #f7f7f7;
  height: auto;
  width: 100%;
  padding-bottom: 20px; /* 원하는 크기의 아래쪽 패딩을 추가합니다. */
`;

export default Bodycolorcomponent;
