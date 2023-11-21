import React from "react";
import { Box } from "@mui/material";
import YouTube from 'react-youtube';

function Youtubebox() {
  const videoId = 'ha3xPsbwoEA'; // YouTube 링크

  const opts = {
    height: '450',
    width: '100%',
  };

  return (
    <Box
      width="50%"
      height={450}
      bgcolor="white"
      marginTop={2}
      borderRadius={5}
      boxShadow="1px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <YouTube videoId={videoId} opts={opts} />
    </Box>
  );
}

export default Youtubebox;
