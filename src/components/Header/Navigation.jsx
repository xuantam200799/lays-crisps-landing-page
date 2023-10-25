import PropTypes from "prop-types";

function NavItem({ styles = "", children }) {
  return (
    <li className={"navigation-item" + styles}>
      <a className="link" href="#">
        {children}
      </a>
    </li>
  );
}

NavItem.propTypes = { styles: PropTypes.String, children: PropTypes.String };

function NavLogo({ styles = "", link, logo }) {
  return (
    <div className={"nav-logo" + styles}>
      <a href={link} className="link">
        <img src={logo} alt="nav-logo" />
      </a>
    </div>
  );
}

NavLogo.propTypes = { logo: PropTypes.String, link: PropTypes.String };

NavLogo.propTypes = { styles: PropTypes.String };

function Navigation({ styles = "", children }) {
  return <ul className={"navigation" + styles}>{children}</ul>;
}

Navigation.propTypes = { styles: PropTypes.String, children: PropTypes.String };

export { NavItem, NavLogo };
export default Navigation;
