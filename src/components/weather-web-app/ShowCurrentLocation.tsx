import { Button, Typography } from "@mui/material";
import React from "react";

import { mainFontFamily, fontSizes } from "../../styles";

interface ShowCurrentLocationProps {
  onClick: () => void;
}
const ShowCurrentLocation: React.FC<ShowCurrentLocationProps> = ({
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant="text"
      sx={{
        textTransform: "unset",
        marginTop: "5px",
        padding: "2px",
      }}
    >
      <Typography
        sx={{
          fontFamily: mainFontFamily,
          fontSize: fontSizes.M,
        }}
      >
        Show current location weather
      </Typography>
    </Button>
  );
};

export default ShowCurrentLocation;
