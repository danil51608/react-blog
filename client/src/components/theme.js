import { createTheme } from "@material-ui/core/styles";


//material ui styles
export const theme = createTheme({
  palette: {
    primary: {
      main: "#1D3557",
    },
    secondary: {
      main: "#E63946",
    },
  },
  overrides: {
    MuiBackdrop: {
      root: {
        zIndex: 9999,
      },
    },
  },
  props: {
    MuiButton: {
      variant: "contained",
      backgroundColor: "#1D3557",
    },
  },
});
