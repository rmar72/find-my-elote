import ProductHeroLayout from "../components/ProductHeroLayout"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import ProductValues from "../components/ProductValues"

const Home = (): JSX.Element => (
  <>
    <ProductHeroLayout />
    <ProductValues />
    <Container maxWidth={"xl"}>
      <Box sx={{ bgcolor: "customPalette.orange.light", height: "60vh" }} />
    </Container>
  </>
)

export default Home
