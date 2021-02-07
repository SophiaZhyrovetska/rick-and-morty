import { PropTypes } from "prop-types";
import "./TextSection.scss";

const TextSection = ({ className, label, children }) => {
  const renderValue = (value, index) => (
    <p className="TextSection__value" key={index}>
      {value}
    </p>
  );
  return (
    <div className={`TextSection ${className}`}>
      <p className="TextSection__label">{label}</p>
      {children?.map(renderValue)}
    </div>
  );
};

TextSection.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.array,
};

export default TextSection;
