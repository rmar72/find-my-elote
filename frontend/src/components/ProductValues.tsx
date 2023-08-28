import { Theme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import productCurvyLines from './productCurvyLines.png'
import foodCart from './food-cart-svgrepo-com.svg' 
import foodTruck from './foodtruck.png'
import foodDelivery from './fast-food-delivery-12997.svg'

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const ProductValues = () => {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#fff5f8' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src={productCurvyLines}
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180, left: -40 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={foodCart}
                alt="foodcart"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 3 }}>
                Find Local Food Gems
              </Typography>
              <Typography variant="h5">
                Our app is your guide to uncover hidden culinary gems in charming neighborhoods, ready to be savored.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={foodTruck}
                alt="foodtruck"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 3 }}>
                Diverse Cuisine
              </Typography>
              <Typography variant="h5">
                Mobile culinary havens are redefining on-the-go dining/snacking, bringing together taste innovation and convenience.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={foodDelivery}
                alt="fooddelivery"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 3 }}>
                Local Community
              </Typography>
              <Typography variant="h5">
              	Contribute to the growth of small businesses and celebrating the diverse tapestry of flavors that your community offers.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues
