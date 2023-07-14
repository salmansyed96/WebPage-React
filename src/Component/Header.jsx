import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";


const Header = () => {
  return (
   <MainHeader>
    <NavLink to="/">
        <img src="logo1.png" alt="logo" className="logo"/>

    </NavLink>
    <NavBar/>
   </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header
