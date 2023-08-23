import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400"

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
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#7fc7d9", // Average color of the background image.
          backgroundPosition: "center 40%",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2"> Upgrade your lunch</Typography>
        <span>____</span>
        <Typography variant="h5" sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}>
          Enjoy secret offers up to -70% off
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ minWidth: 200, bgcolor: "#ff3366" }}
        >
          Register
        </Button>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          {" "}
          Discover the experience
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
          opacity: 0.5,
          zIndex: 2,
        }}
      />
    </Container>
  )
}

export default ProductHeroLayout
