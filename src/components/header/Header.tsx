"use client";
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  burgerButtonStyles,
  burgerIconStyles,
  burgerWrapStyles,
  fullHeaderStyles,
  linkStyles,
} from "../../styles/headerStyles";

const Header = () => {
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  const burger = useRef<HTMLHeadingElement>(null);
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const handleBurgerButtonClick = () => {
    burgerClicked ? setBurgerClicked(false) : setBurgerClicked(true);
  };
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        burger.current != null &&
        !burger.current.contains(event.target as HTMLInputElement)
      ) {
        setBurgerClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burger]);

  useEffect(() => {
    setBurgerClicked(false);
  }, [pathname]);

  const HeaderView = () => {
    if (isMobile) {
      return (
        <Box ref={burger} display="block">
          <Box sx={burgerWrapStyles}>
            <Box sx={burgerIconStyles}>
              <Button onClick={handleBurgerButtonClick} sx={burgerButtonStyles}>
                <MenuIcon sx={{ fontSize: 30 }} />
              </Button>
            </Box>
          </Box>
          {burgerClicked && (
            <Box mt={6}>
              <List>
                <ListItemButton
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  <ListItemText primary="About" />
                </ListItemButton>
              </List>
            </Box>
          )}
        </Box>
      );
    } else
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
  return (
    <Box
      position="fixed"
      width="100%"
      bgcolor="#479dff"
      zIndex="100"
      boxShadow="0px 2px 10px 0px rgba(0, 0, 0, 0.1)"
    >
      <HeaderView />
    </Box>
  );
};
export default Header;
