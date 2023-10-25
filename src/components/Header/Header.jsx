import "./header.css";
import Logo from "../../assets/logo.png";
import Navigation, { NavItem, NavLogo } from "./Navigation";
import { SearchInput } from "../Input/Input";
import Button, { IconButton } from "../Button/Button";

function Header() {
  return (
    <div className="header container">
      <div className="header-left">
        <Navigation>
          <NavLogo link={"#"} logo={Logo} />
          <NavItem>Products</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Videos</NavItem>
          <NavItem>Recipes</NavItem>
          <NavItem>Where to Buy</NavItem>
        </Navigation>
      </div>
      <div className="header-right">
        <SearchInput
          type="text"
          placeholder="Search collection, item or user"
        />
        <IconButton icon={"fa-regular fa-circle-user"} />
        <Button variant={"contained"}>Sign Up</Button>
      </div>
    </div>
  );
}

export default Header;
