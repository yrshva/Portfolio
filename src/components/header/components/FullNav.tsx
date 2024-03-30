"use client";
import { Box, useMediaQuery } from "@mui/material";
import Link from "next/link";

import { fullHeaderStyles, linkStyles } from "../../../styles/headerStyles";

const FullNav = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  if (isMobile) {
    return null;
  }

  return (
    <Box height="60px" display="flex" justifyContent="center">
      <Box sx={fullHeaderStyles}>
        <Box margin="0 10px">
          <Link href="/" style={linkStyles}>
            Home
          </Link>
          <Link href="/about" style={linkStyles}>
            About
          </Link>
          <Link href="/about#contact" style={linkStyles}>
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default FullNav;
