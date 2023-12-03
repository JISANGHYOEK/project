import React from "react";
import styled from "styled-components";
import Bodybox1 from "./Bodybox1";
import Bodybox2 from "./Bodybox2";
import Bodybox3 from "./Bodybox3";
import Youtubebox from "../Youtube/Youtubebox";
import { Box } from "@mui/material";
import Bodybox4 from "./Bodybox4";

function Bodycolorcomponent() {
  return (
    <Bodycolor>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Bodybox1 />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        paddingRight={0.2}
        flexDirection="row"
        alignItems="center"
        flexWrap="wrap"
      >
        <Youtubebox />
      </Box>

      <Box display="flex" alignItems="center" marginTop={2}>
        <Bodybox3 />
        <Bodybox2 />
      </Box>
      <Bodybox4 />
    </Bodycolor>
  );
}

const Bodycolor = styled.div`
  background-color: #f7f7f7;
  height: auto;
  width: 100%;
  padding-bottom: 50px;
`;

export default Bodycolorcomponent;
