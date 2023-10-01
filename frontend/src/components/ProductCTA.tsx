import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import TextField from "../components/Textfield"
import Button from "../components/Button"

function ProductCTA() {
  return (
    <Container
      component="section"
      maxWidth={"xl"}
      sx={{
        pt: 10,
        display: "flex",
        bgcolor: "white",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "customPalette.softColors.cremitalight",
              border: "0.5px solid black",
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive offers
              </Typography>
              <Typography variant="h5">
                Taste the holidays of the everyday close to home.
              </Typography>
              <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                sx={{
                  width: "100%",
                  mt: 3,
                  mb: 2,
                  bgcolor: "white",
                  height: "50px",
                }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{
                  width: "100%",
                  bgcolor: "customPalette.softColors.terracota",
                  "&:hover": {
                    bgcolor: "customPalette.softColors.terracotaLight",
                    color: "customPalette.softColors.terracota",
                  },
                }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -70,
              left: -80,
              right: 0,
              bottom: 0,
              width: "115%",
              background:
                "url(https://mui.com/static/themes/onepirate/productCTAImageDots.png)",
            }}
          />
          <Box
            sx={{
              backgroundSize: "cover",
              backgroundImage: `url(https://c8.alamy.com/compit/dtkxrf/murale-colorato-intitolato-in-pace-e-armonia-con-la-natura-da-leone-tanguma-aeroporto-internazionale-di-denver-colorado-stati-uniti-d-america-dtkxrf.jpg)`,
              position: "absolute",
              top: -30,
              left: -28,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              maxWidth: 900,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductCTA
