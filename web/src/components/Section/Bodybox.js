import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
function Bodybox() {
  return (
    <div>
      <Box
        width={230}
        height={223}
        bgcolor="white"
        margin={2}
        borderRadius={5}
        boxShadow="1px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        padding={0.5}
      >
        <Div1>V.I.P 추천 종목</Div1>
      </Box>
      <Box
        width={230}
        height={223}
        bgcolor="white"
        margin={2}
        borderRadius={5}
        boxShadow="1px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        padding={0.5}
      >
        <Div2>V.I.P 매매 결산</Div2>
      </Box>
    </div>
  );
}

const Div1 = styled.div`
  font: 600 20px/150% Inter, sans-serif;
`;

const Div2 = styled.div`
  font: 600 20px/123% Inter, sans-serif;
`;

export default Bodybox;
