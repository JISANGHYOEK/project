import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

function Bodybox3() {
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
        <Div1>무료 종목 바로가기</Div1>
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
        <StyledLink href="./AskPage" target="_blank" rel="noopener noreferrer">
          <StyledImage
            src="/Ask.png"
            alt="KakaoTalk"
            width="230"
            height="223"
          />
        </StyledLink>
      </StyledBox>
    </div>
  );
}

const Div1 = styled.div`
  font: 600 20px/123% Inter, sans-serif;
`;
const StyledBox = styled(Box)`
  /* Your additional styles */
`;

const StyledLink = styled.a`
  font: 600 20px/123% Inter, sans-serif;
  text-decoration: none;
  color: inherit;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px; /* 설정할 테두리 반경 값 */
`;

export default Bodybox3;
