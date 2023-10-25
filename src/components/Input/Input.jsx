import "./input.css";
import PropTypes from "prop-types";

const Input = ({ placeholder = "", type = "text" }) => {
  return <input placeholder={placeholder} className="input-item" type={type} />;
};

Input.propTypes = { placeholder: PropTypes.String, type: PropTypes.String };

const SearchInput = ({ placeholder = "", type = "text", icon }) => {
  return (
    <div className="input-group">
      <input placeholder={placeholder} className="input-item" type={type} />
      <span className="input-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
    </div>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.String,
  type: PropTypes.String,
};

export { SearchInput };
export default Input;
