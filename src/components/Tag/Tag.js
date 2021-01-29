import { PropTypes } from "prop-types";
import "./Tag.scss";

const Tag = ({ className, children }) => {
  return (
    <div className={`Tag ${className}`}>
      <span>{children}</span>
    </div>
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
};

export default Tag;
