"use client";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import {
  burgerButtonStyles,
  burgerIconStyles,
  burgerWrapStyles,
} from "../../../styles/headerStyles";

const MobileNav = () => {
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  const burger = useRef<HTMLHeadingElement>(null);
  const router = useRouter();
  const handleBurgerButtonClick = () => {
    burgerClicked ? setBurgerClicked(false) : setBurgerClicked(true);
  };

  const onNavigate = (route: string) => {
    router.push(route);
    setBurgerClicked(false);
  };

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

  return (
    <Box ref={burger} display={{ xs: "block", sm: "none" }}>
      <Box sx={burgerWrapStyles}>
        <Box sx={burgerIconStyles}>
          <Button onClick={handleBurgerButtonClick} sx={burgerButtonStyles}>
            <MenuIcon sx={{ fontSize: 30 }} />
          </Button>
        </Box>
      </Box>
      <Collapse in={burgerClicked}>
        <List>
          <ListItemButton
            onClick={() => {
              onNavigate("/");
            }}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              onNavigate("/about");
            }}
          >
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              onNavigate("/about#contact");
            }}
          >
            <ListItemText primary="Contact" />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
};

export default MobileNav;
