import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import ButtonBase from "@mui/material/ButtonBase"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}))

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}))

const images = [
  {
    url: "https://www.shekeepsalovelyhome.com/wp-content/uploads/2020/07/Esquites_Mexican-Corn-Salad_elote-1.jpg",
    title: "X",
    width: "40%",
  },
  {
    url: "https://media.cnn.com/api/v1/images/stellar/prod/220526093031-13-body-best-asian-street-foods-sai-krok-isan.jpg?c=original&q=w_1280,c_fill",
    title: "X",
    width: "20%",
  },
  {
    url: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/47cab139-bfe5-4002-aad5-2afc4941d34c.jpeg",
    title: "X",
    width: "40%",
  },

  {
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/58601ef6f0c683bda92814c695a6e62a/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    title: "X",
    width: "38%",
  },
  {
    url: "https://img.atlasobscura.com/Ojjf7QZ2NmDX3aHbDOsMOVeGXrpNsV__QTfumjnY_qs/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8wNDE3/NDQ5NWY2NWI2OGRh/MjlfTWFndXJvX3p1/a2Vfa3VzaGlfYnlf/am1zdWFyZXpfaW5f/TmlzaGlraV9JY2hp/YmEsX0t5b3RvLmpw/Zw.jpg",
    title: "X",
    width: "38%",
  },
  {
    url: "https://www.humanitieskansas.org/assets/images/NoCrop_1920x1280/c16104d537374039b9e21c98d5182190.jpg",
    title: "X",
    width: "24%",
  },

  {
    url: "https://www.mylatinatable.com/wp-content/uploads/2019/07/Esquites-1.jpg",
    title: "X",
    width: "30%",
  },
  {
    url: "https://infatuation.imgix.net/media/images/guides/asian-owned-bakeries-nyc/NYC_Bakery_BibbleAndSip_1.png",
    title: "X",
    width: "20%",
  },
  {
    url: "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/advanceopinion_impact/photo/6-1-recipe-w-kim-b7a12b2bdc5c41ea.jpg",
    title: "X",
    width: "30%",
  },
  {
    url: "https://c8.alamy.com/comp/D7K453/snack-food-vendorpushkar-india-D7K453.jpg",
    title: "X",
    width: "20%",
  },

  {
    url: "https://thumbs.dreamstime.com/z/new-york-december-street-food-vendor-cart-manhattan-there-mobile-food-vendors-licensed-city-street-food-vendor-178944112.jpg",
    title: "X",
    width: "40%",
  },
  {
    url: "https://castreetvendors.org/app/uploads/2022/01/220110_CASV_192_R-scaled.jpg",
    title: "X",
    width: "20%",
  },
  {
    url: "https://media.timeout.com/images/105889129/750/562/image.jpg",
    title: "X",
    width: "40%",
  },
]

export default function ProductCategories() {
  return (
    <Container
      component="section"
      maxWidth={"xl"}
      sx={{ padding: 8, bgcolor: "white" }}
    >
      <Container fixed sx={{ py: 4, bgcolor: "white" }}>
        <Typography variant="h4" align="center" component="h2">
          FOR ALL TASTES AND ALL DESIRES
        </Typography>
        <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
          {images.map((image) => (
            <ImageIconButton
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center 40%",
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <ImageBackdrop className="imageBackdrop" />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "common.white",
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className="imageTitle"
                >
                  {image.title}
                  <div className="imageMarked" />
                </Typography>
              </Box>
            </ImageIconButton>
          ))}
        </Box>
      </Container>
    </Container>
  )
}
