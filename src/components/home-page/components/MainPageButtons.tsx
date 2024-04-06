"use client";
import { Box, Button, Modal } from "@mui/material";
import React, { RefObject, useState } from "react";

import { ContactForm } from "../../ContactForm";
import { buttonStyle } from "../../../styles";

interface MainPageButtonsProps {
  projects: RefObject<HTMLDivElement>;
}

const MainPageButtons: React.FC<MainPageButtonsProps> = ({ projects }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={() => {
          projects.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        sx={buttonStyle({ color: "secondary" })}
      >
        See my projects
      </Button>
      <Button onClick={handleOpen} sx={buttonStyle({ color: "primary" })}>
        Contact me
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ContactForm type="modal" setOpen={setOpen} />
        </Box>
      </Modal>
    </>
  );
};

export default MainPageButtons;
