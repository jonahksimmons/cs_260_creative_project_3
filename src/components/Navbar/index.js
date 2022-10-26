import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/government" activeStyle>
            Government
          </NavLink>
          <NavLink to="/Recommendations" activeStyle>
	    Recommendations
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
