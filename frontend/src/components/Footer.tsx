import * as React from "react" // @ts-ignore
import Box from "@mui/material/Box" // @ts-ignore
import Grid from "@mui/material/Grid" // @ts-ignore
import Link from "@mui/material/Link" // @ts-ignore
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import TextField from "../components/Textfield"

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="#">
        Find My Elote
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  )
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "customPalette.softColors.warmTerraCota",
  mr: 1,
  "&:hover": {
    bgcolor: "customPalette.softColors.terracotaLight",
  },
}

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "es-ES",
    name: "Español",
  },
  {
    code: "fr-FR",
    name: "Français",
  },
]

export default function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "customPalette.orange.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box component="a" href="#" sx={iconStyle}>
                  <img
                    src="https://mui.com/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="#" sx={iconStyle}>
                  <img
                    src="https://mui.com/static/themes/onepirate/appFooterTwitter.png"
                    alt="Twitter"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography>Legal</Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography>Language</Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{
                mt: 1,
                width: 150,
              }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  )
}
