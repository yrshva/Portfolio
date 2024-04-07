"use client";
import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";

import { ContactForm } from "../ContactForm";
import { buttonStyle } from "../../styles";
import { useRouter } from "next/navigation";

const MainPageButtons: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
          router.push("#weather-app");
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
