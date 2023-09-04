import { useState, MouseEvent } from "react"
import { NavLink } from "react-router-dom"
import Appbar from "@mui/material/Appbar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Drawer from "@mui/material/Drawer"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Avatar from "@mui/material/Avatar"
import Logo from "./Logo"
import avatarImage from "./avatar.jpg"
import Navigation from "./Navigation"

const Header = (): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawerToggle = () =>
    setDrawerOpen((prevState: boolean) => !prevState)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="account-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to={"/logout"}>Logout</NavLink>
      </MenuItem>
    </Menu>
  )

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo />
      </Typography>
      <Divider />
      <Navigation />
    </Box>
  )

  return (
    <header>
      <Appbar
        sx={{ bgcolor: "customPalette.orange.light", color: "white.dark" }}
      >
        <Toolbar>
          <IconButton
            aria-label="Hamburger menu open drawer button"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "white.main" }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 0.5 }} />
          <Logo />
          <Typography variant="h6">Find My Elote</Typography>
          <Box sx={{ flexGrow: 0.5 }} />
          <Avatar
            alt="Profile Picture Menu"
            src={avatarImage}
            onClick={handleProfileMenuOpen}
          />
        </Toolbar>
      </Appbar>
      {renderMenu}

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 250,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </header>
  )
}

export default Header
