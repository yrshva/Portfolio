"use client";
import emailjs from "@emailjs/browser";
import { Box, Button, FormGroup, TextField } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";
import React from "react";

const modalStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
};

export const ContactForm = ({
  type,
  setOpen,
}: {
  type: "modal" | "block";
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleSubmit = (event: { target: any; preventDefault: () => void }) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "contact_formxcvewr23e4",
        "template_cgw89od",
        event.target,
        "wNuFFCZm6_kMdUYKP"
      )
      .then(() => {
        alert("Thank you! I will be in touch with you soon.");
      })
      .then(() => {
        if (setOpen !== undefined) {
          setOpen(false);
        }
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

  return (
    <Box
      id="contact"
      sx={{
        width: "90%",
        maxWidth: "400px",
        ...(type === "modal" && modalStyle),
      }}
      component="form"
      onSubmit={handleSubmit}
      maxWidth="85vw"
    >
      <FormGroup>
        <TextField
          id="filled-textarea"
          label="Name:"
          name="name"
          placeholder="John Doe"
          multiline
          variant="filled"
          required
        />
        <TextField
          id="filled-textarea"
          label="Email:"
          name="email"
          placeholder="john.doe@test.com"
          multiline
          variant="filled"
          required
        />
        <TextField
          id="filled-textarea"
          label="Company name:"
          name="company_name"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Phone number:"
          name="phone"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Message:"
          name="message"
          minRows={6}
          maxRows={10}
          multiline
          variant="filled"
        />
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Box>
  );
};
