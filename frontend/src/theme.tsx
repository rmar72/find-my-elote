import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"]
    black: Palette["primary"]
    orange: Palette["primary"]
  }

  interface PaletteOptions {
    white?: PaletteOptions["primary"]
    black?: PaletteOptions["primary"]
    orange?: PaletteOptions["primary"]
  }
}

const mainTheme = createTheme({
  palette: {
    primary: {
      // blue
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
    },
    secondary: {
      main: "#2e7d32", // soft herbal green
      light: "##D6E8A5", // Light Pastel Green
      dark: "#9DB770", // Dark Olive Green
    },
    error: {
      main: "#E63946", // Hungry Red
      light: "#ef5350",
      dark: "#c62828",
    },
    info: {
      main: "#6B6E70", // Earthy Gray
      light: "#A6A9AA",
      dark: "#46484A",
    },
    success: {
      // green
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
    },
    white: {
      main: "#FFF",
      dark: "#F5F5F5", //smoky white
    },
    black: {
      main: "#000",
      light: "#333333", // charcoal black
      dark: "#141414", // midnight black
    },
    orange: {
      main: "#FF7043", // Orangish-Red
      light: "#FFC7A0", // light peach (soft)
      dark: "#1b5e20",
    },
  },
})

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#fef1ee", // salmon
      light: "#fff7f5",
      dark: "#e2c9c5",
    },
    // secondary: {
    //   main: ""
    //   light: ""
    //   dark: ""
    // },
  },
})

// const darkTheme = createTheme({
//   palette: {
//     // secondary: {
//     //   // main: grey[500],
//     // },
//   },
// })

export { mainTheme }
