import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Stack from "@mui/material/Stack"
import Container from "@mui/material/Container"

function App() {
  return (
    <>
      <Header />
      <Stack>
        <Container maxWidth={"xl"} disableGutters={true} sx={{ mt: "60px" }}>
          <Outlet />
        </Container>
        <Footer />
      </Stack>
    </>
  )
}

export default App
