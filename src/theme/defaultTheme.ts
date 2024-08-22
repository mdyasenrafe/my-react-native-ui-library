import { TextStyle } from "react-native";

export const theme = {
  colors: {
    primary: "#6200ee",
    secondary: "#03dac6",
    background: "#ffffff",
    surface: "#f5f5f5",
    error: "#b00020",
    onPrimary: "#ffffff",
    onSecondary: "#000000",
    onBackground: "#000000",
    onSurface: "#000000",
    onError: "#ffffff",
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
  },
  textVariants: {
    header: {
      fontSize: 34,
      fontWeight: "bold" as TextStyle["fontWeight"],
      color: "onBackground",
    },
    subheader: {
      fontSize: 28,
      fontWeight: "600" as TextStyle["fontWeight"],
      color: "onBackground",
    },
    body: {
      fontSize: 16,
      color: "onBackground",
    },
    caption: {
      fontSize: 12,
      color: "onSurface",
    },
    button: {
      fontSize: 16,
      fontWeight: "600" as TextStyle["fontWeight"],
      color: "onPrimary",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export type defaultTheme = typeof theme;
