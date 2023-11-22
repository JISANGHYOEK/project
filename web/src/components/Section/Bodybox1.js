import React from "react";
import { Box } from "@mui/material";

function Bodybox1() {
  return (
    
    <Box
      width="67%"
      height={200}
      bgcolor="white"
      marginTop={2}
      borderRadius={5}
      boxShadow="1px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <h1>공지사항</h1>
    </Box>
  );
}

export default Bodybox1;
