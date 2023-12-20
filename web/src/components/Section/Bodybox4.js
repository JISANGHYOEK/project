import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

function Bodybox4() {
  return (
    <StyledImage src="/banner1.png" alt="banner2" width="230" height="220" />
  );
}

const StyledImage = styled.img`
  margin-left: 400px;
  margin-top: 5px;
  display: flex;
  margin-bottom: 50px;
  width: 60%;
  height: 500px;
  border-radius: 5px; /* 설정할 테두리 반경 값 */
`;

export default Bodybox4;
