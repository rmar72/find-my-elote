import ProductHeroLayout from "../components/ProductHeroLayout"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

const Home = (): JSX.Element => (
  <>
    <ProductHeroLayout />
    <Container maxWidth={"xl"}>
      <Box sx={{ bgcolor: "customPalette.orange.light", height: "60vh" }} />
    </Container>
  </>
)

export default Home
