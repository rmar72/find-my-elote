import ProductHeroLayout from "../components/ProductHeroLayout"
import ProductValues from "../components/ProductValues"
import ProductCategories from "../components/ProductCategories"
import ProductCTA from "../components/ProductCTA"

const Home = (): JSX.Element => (
  <>
    <ProductHeroLayout />
    <ProductValues />
    <ProductCategories />
    <ProductCTA />
  </>
)

export default Home
