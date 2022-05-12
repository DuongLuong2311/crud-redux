import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function Navbar({toggleDrawer}) {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <IconButton onClick={toggleDrawer} aria-label="delete" size="large">
          <MenuIcons/>
        </IconButton>
        <Link to="/" style={{color: 'white'}}>
          <h5 className="logo">
            CRUD
          </h5>
        </Link>
      </div>

      <ul>
        <li>
          <i className="fa-solid fa-house"></i>
        </li>
        <li>
          <i className="fa-solid fa-bell"></i>
        </li>
        <li>
          <i className="fa-solid fa-circle-user"></i>
        </li>
      </ul>
    </div>
  )
}

const MenuIcons = styled(MenuIcon)`
  color: #fff;
`