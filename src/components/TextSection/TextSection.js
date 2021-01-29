import { PropTypes } from "prop-types";
import "./TextSection.scss";

const TextSection = ({ className, label, value }) => {
  return (
    <div className={`TextSection ${className}`}>
      <p className="TextSection__label">{label}</p>
      <p className="TextSection__value">{value}</p>
    </div>
  );
};

TextSection.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextSection;
