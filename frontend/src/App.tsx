import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Stack from "@mui/material/Stack"
import Container from "@mui/material/Container"

function App() {
  return (
    <Stack>
      <Header />
      <Container
        maxWidth={"xl"}
        disableGutters={true}
        sx={{ mt: "45px", minHeight: "65vh" }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Stack>
  )
}

export default App
