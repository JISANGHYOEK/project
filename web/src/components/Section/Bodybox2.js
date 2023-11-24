import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

function Bodybox2() {
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
        <Div1>V.I.P 매매</Div1>
      </Box>
      <StyledBox
        width={230}
        height={223}
        bgcolor="white"
        margin={2}
        borderRadius={5}
        boxShadow="1px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        padding={0.5}
      >
        <StyledLink href="https://open.kakao.com/me/cc12" target="_blank" rel="noopener noreferrer">
          카카오톡 바로가기
        </StyledLink>
      </StyledBox>
    </div>
  );
}



const Div1 = styled.div`
  font: 600 20px/150% Inter, sans-serif;
`;

const StyledBox = styled(Box)`
  /* Your additional styles */
`;


const StyledLink = styled.a`
  font: 600 20px/123% Inter, sans-serif;
  text-decoration: none;
  color: inherit;
`;

export default Bodybox2;
