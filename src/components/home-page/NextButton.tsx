"use client";
import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

import { buttonStyle } from "../../styles";

interface NextButtonProps {
  nextId: string;
}

const NextButton: React.FC<NextButtonProps> = ({ nextId }) => {
  const router = useRouter();
  return (
    <Button
      sx={buttonStyle({ color: "primary" })}
      onClick={(e) => {
        router.push(`#${nextId}`);
      }}
    >
      Next
    </Button>
  );
};

export default NextButton;
