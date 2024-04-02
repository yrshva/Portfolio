import { CSSProperties } from "react";
import { colors } from ".";
import { containerStyles } from "./projectStyles";

interface WeatherAppStyles {
  container: CSSProperties;
}

const styles: WeatherAppStyles = {
  container: {
    ...containerStyles,
    backgroundColor: colors.primary.main,
    textAlign: "unset",
    flexDirection: "column",
  },
};

export default styles;
