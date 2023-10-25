import "./button.css";
import PropTypes from "prop-types";

const Button = ({ variant, children, ...rests }) => {
  return <button className={"btn " + "btn-" + variant}>{children}</button>;
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
};

const IconButton = ({ icon, ...rests }) => {
  return (
    <button className="btn rounded">
      <i className={icon}></i>
    </button>
  );
};

export { IconButton };
export default Button;
