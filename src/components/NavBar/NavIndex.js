import React, { useContext } from 'react'
import { Nav, NavLink, Bars, NavMenue, NavBtn, NavBtnLink, NavLinkLogIn, NavLogoLink } from './NavBarElements'
import NavLogo from './NavLogo.svg';
import UserContext from "../../context/userContext";
import styles from "../navigation/navigation.module.css";


function NavBar() {
  const { user, setUser } = useContext(UserContext)

  return ( <Nav>
    <NavLogoLink to="/">
        <img 
          src={NavLogo} 
          className='nav-logo' 
          alt='navLogo'
        />
    </NavLogoLink>
    <Bars />
    <NavMenue>
        <NavLink to="/uploadSketch" activeStyle>
            Let's Code
        </NavLink>
        <NavLink to="/howToUse" activeStyle>
            How it Works
        </NavLink>
        <NavLink to="/aboutUs" activeStyle>
            About Us
        </NavLink>
        <NavLink to="/pricing" activeStyle>
            Pricing
        </NavLink>
    </NavMenue>
    <NavBtn>
      { 
        user.name ?
          (
            <NavLink to="/myAccount" style={{color:'white', marginRight:'10px'}}>{`Hi, ${user.name} `}&#129312;</NavLink>
          ):
          (
            <NavLinkLogIn to="/login">Log In</NavLinkLogIn>
          )
      }
      {
        user.name ?
            (<NavBtnLink to="/login" onClick={() => {
              // call logout
              const newUser = { name: null, loggedIn: false }
              localStorage.removeItem('accessToken')
              localStorage.removeItem("userData");
              setUser(newUser);
            }}activeStyle>Log Out</NavBtnLink>
            ):
            (
                <NavBtnLink to="/register">Sign Up</NavBtnLink>
            )
      }
    </NavBtn>
  </Nav>)
}

export default NavBar
