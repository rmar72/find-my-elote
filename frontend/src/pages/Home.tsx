import ProductHeroLayout from "../components/ProductHeroLayout"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

const Home = (): JSX.Element => (
  <>
    <ProductHeroLayout />
    <Container maxWidth={"xl"}>
      <Box sx={{ backgroundColor: "blue", height: "60vh" }} />
    </Container>
  </>
)

export default Home
