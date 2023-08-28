import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import productBackground from "./product-bg.jpg"

const ProductHeroLayout = (): JSX.Element => {
  return (
    <Container
      maxWidth={"xl"}
      disableGutters={true}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "80vh",
        position: "relative",
        // height: "100%",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${productBackground})`,
          bgcolor: "#E3735E", // Average color of the background image.
          backgroundPosition: "bottom",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            // color: "secondary.light",
            color: "customPalette.white.dark",
            mt: 10,
            textAlign: "center",
            zIndex: 3,
          }}
        >
          Empowering Palates, Celebrating Culture
        </Typography>
        <span>____</span>
        <Typography
          variant="h5"
          sx={{
            color: "customPalette.white.dark",
            mb: 4,
            mt: { xs: 4, sm: 4 },
            textAlign: "center",
            zIndex: 3,
          }}
        >
          Supporting Local, One Bite at a Time
        </Typography>
        <Button
          variant="contained"
          size="large"
						sx={{
						minWidth: 200,
						bgcolor: "#E3735E",
						zIndex: 3,
						"&:hover": {
							bgcolor: "#F5A193", color: "#E3735E"
						}}}
        >
          Register
        </Button>
        <Typography
          variant="body2"
          color="inherit"
          sx={{ color: "customPalette.white.dark", mt: 2, zIndex: 3 }}
        >
        	Uplift Local Vendors
        </Typography>
        <span>{"--->"}</span>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "common.black",
          opacity: 0.3,
          zIndex: 2,
        }}
      />
    </Container>
  )
}

export default ProductHeroLayout
