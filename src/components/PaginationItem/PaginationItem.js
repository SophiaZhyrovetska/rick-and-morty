import "./PaginationItem.scss";
import {PropTypes} from "prop-types";

const PaginationItem = ({ className, text }) => {
  return (
    <div className={`PaginationItem ${className}`}>
      <span className="PaginationItem__text">{text}</span>
    </div>
  );
};

PaginationItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default PaginationItem;
