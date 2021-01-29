import Search from "../Search";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <Link to="/" className="Header__logoContainer">
        <Logo className="Header__logo" />
      </Link>
      <Search className="Header__search" />
    </div>
  );
}

export default Header;
