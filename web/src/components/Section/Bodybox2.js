import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

function Bodybox2() {
  return (
    <div>
      <StyledBox
        width={230}
        height={210}
        bgcolor="white"
        margin={2}
        borderRadius={5}
        boxShadow="1px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        padding={0.5}
      >
        <StyledLink href="./AskPage" target="_blank" rel="noopener noreferrer">
          <StyledImage src="/Ask.png" alt="Ask" width="230" height="210" />
        </StyledLink>
      </StyledBox>
      <StyledBox
        width={230}
        height={210}
        bgcolor="white"
        margin={2}
        borderRadius={5}
        boxShadow="1px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        padding={0.5}
      >
        <StyledLink
          href="https://open.kakao.com/me/cc12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImage
            src="/katalk.png"
            alt="katalk"
            width="230"
            height="210"
          />
        </StyledLink>
      </StyledBox>
    </div>
  );
}

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

export default Bodybox2;
