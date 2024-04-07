"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

import { buttonStyle } from "../../styles";

interface PreviousButtonProps {
  previousId: string;
}

const PreviousButton: React.FC<PreviousButtonProps> = ({ previousId }) => {
  const router = useRouter();
  return (
    <Button
      sx={buttonStyle({ color: "secondary" })}
      onClick={(e) => {
        router.push(`#${previousId}`);
      }}
    >
      Previous
    </Button>
  );
};

export default PreviousButton;
