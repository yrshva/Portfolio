import { Box } from "@mui/material";
import Link from "next/link";

import { fullHeaderStyles, linkStyles } from "../../../styles/headerStyles";

const FullNav = () => {
  return (
    <Box
      height="60px"
      display={{ xs: "none", sm: "flex" }}
      justifyContent="center"
    >
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
