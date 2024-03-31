import { CSSProperties } from "react";
import { colors } from ".";

interface WeatherAppStyles{
    container: CSSProperties
}

const styles:WeatherAppStyles={
    container: {
        minHeight: "100vh",
        backgroundColor: colors.primary.main,
        padding: 40,
    }
}

export default styles;