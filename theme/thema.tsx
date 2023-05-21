import { createTheme, PaletteOptions } from "@mui/material/styles";

export interface ICustomPalette extends PaletteOptions {
  orange?: {
    main: string;
  };
  blue?: {
    main: string;
  };
  green?: {
    main: string;
  };
}

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      lineHeight: 1.5,
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      lineHeight: 1.5,
      marginBottom: "0.75rem",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      lineHeight: 1.5,
      marginBottom: "0.5rem",
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      lineHeight: 1.5,
      marginBottom: "0.5rem",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: 1.5,
      marginBottom: "0.5rem",
    },
    h6: {
      fontSize: "0.875rem",
      fontWeight: "bold",
      lineHeight: 1.5,
      marginBottom: "0.5rem",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "28px",
    },
    subtitle2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      marginBottom: "0.5rem",
    },
    body1: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "19px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "14px",
      color: "#A3A3A3",
    },
  },
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#000000",
      secondary: "#A3A3A3",
    },
    background: {
      default: "#f5f5f5",
    },
    orange: {
      main: "#FF653A",
    },
    blue: {
      main: "#8234F8",
    },
    green: {
      main: "#2BB272",
    },
  } as ICustomPalette,
  shape: {
    borderRadius: 12,
  },
});

export default theme;
