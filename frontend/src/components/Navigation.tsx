import { NavLink } from "react-router-dom"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"

const Navigation = (): JSX.Element => {
  const navItems = [
    <NavLink to={"/"}>Home</NavLink>,
    <NavLink to={"/vendors"}>Vendors</NavLink>,
    <NavLink to={"/foodmap"}>Food Map</NavLink>,
  ]

  return (
    <nav className="navbar nav">
      <List>
        {navItems.map((navItem) => (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={navItem} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  )
}

export default Navigation
