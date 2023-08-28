import { createTheme } from "@mui/material/styles"

// declare module "@mui/material/styles" {
//   interface Palette {
//     white: Palette["primary"]
//     black: Palette["primary"]
//     orange: Palette["primary"]
//   }

//   interface PaletteOptions {
//     white?: PaletteOptions["primary"]
//     black?: PaletteOptions["primary"]
//     orange?: PaletteOptions["primary"]
//     softColors?: Palette
//   }
// }

interface CustomPaletteColors {
  main: string
  light?: string
  dark?: string
}

interface CustomSoftColors {
  softblue1: string
  softblue2: string
  softorange: string
  softrose: string
  terracota: string
  terracotaLight: string
  terracotaDark: string
  palePink: string
  lightCream: string
  softSageCream: string
  deepMochaBrown: string
  gentleSkyblue: string
  warmTerraCota: string
}

interface CustomPalette {
  white: CustomPaletteColors
  black: CustomPaletteColors
  orange: CustomPaletteColors
  softColors?: CustomSoftColors
}
declare module "@mui/material/styles" {
  interface Theme {
    customPalette: CustomPalette
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customPalette?: CustomPalette
  }
  interface Palette {
    customPalette?: CustomPalette
  }
  interface PaletteOptions {
    customPalette?: CustomPalette
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
      main: "#C1D37F", // soft green
      light: "#D6E8A5", // Light Pastel Green
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
    customPalette: {
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
      softColors: {
        softblue1: "#6BA4BB", // (Soft, muted blue)
        softblue2: "#7F8CC1", // (Cool, light blue)
        softorange: "#F3A712", // (Bright, warm orange)
        softrose: "#D8AAB7", // (Dusty rose)
        terracota: "#E3735E",
        terracotaLight: "#F5A193",
        terracotaDark: "#C95844",
        // terracotaCompliments:
        palePink: "#fff5f8",
        lightCream: "#F9F5E6",
        softSageCream: "#A7CDA8",
        deepMochaBrown: "#4E3629",
        gentleSkyblue: "#94B7D4",
        warmTerraCota: "#B36B52",
      },
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
