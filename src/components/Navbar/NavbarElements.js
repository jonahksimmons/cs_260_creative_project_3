import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #87AFD7;
  height: 85px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  font-size: 20px;
  color: #5F8787;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #D7D7FF;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
