import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

function Bodybox3() {
  return (
    <StyledImage src="/banner2.png" alt="banner2" width="230" height="220" />
  );
}

const StyledImage = styled.img`
  margin-left: 400px;
  width: 750px;
  height: 430px;
  border-radius: 5px; /* 설정할 테두리 반경 값 */
`;

export default Bodybox3;
