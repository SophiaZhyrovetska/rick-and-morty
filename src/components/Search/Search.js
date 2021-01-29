import "./Search.scss";
import { PropTypes } from "prop-types";

const Search = ({ className, value, setValue }) => {
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  return (
    <div className={`Search ${className}`}>
      <input className="Search__input" placeholder="search by name" value={value} onChange={handleChange} />
      <button className="Search__button">Find Character</button>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default Search;
