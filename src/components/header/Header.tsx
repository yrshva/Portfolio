import { Box } from "@mui/material";

import MobileNav from "./components/MobileNav";
import FullNav from "./components/FullNav";

const Header = () => {
  return (
    <Box
      position="fixed"
      width="100%"
      bgcolor="#479dff"
      zIndex="100"
      boxShadow="0px 2px 10px 0px rgba(0, 0, 0, 0.1)"
    >
      <MobileNav />
      <FullNav />
    </Box>
  );
};
export default Header;
