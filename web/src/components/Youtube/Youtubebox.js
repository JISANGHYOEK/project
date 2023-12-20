import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import YouTube from "react-youtube";

function Youtubebox() {
  const videoId = "EVnuCfa2bVE"; // YouTube 링크

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const opts = {
    height: "450",
    width: windowWidth * 0.59, // 창의 너비에 따라 비율로 조정
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box display="flex" marginTop={2} borderRadius={5} marginLeft={50}>
      <YouTube videoId={videoId} opts={opts} />
    </Box>
  );
}

export default Youtubebox;
