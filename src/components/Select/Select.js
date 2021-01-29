import { useState } from "react";
import { PropTypes } from "prop-types";
import "./Select.scss";

const Select = ({ value, handleSelect, options, label }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleIsOpened = () => setIsOpened(!isOpened);

  const onOptionClick = (option) => {
    handleSelect(option.value);
    setIsOpened(false);
  };
  const renderOption = (option) => (
    <li value={option.value} className="Select__option" onClick={() => onOptionClick(option)}>
      {option.label}
    </li>
  );
  const selectedOption = options?.find((option) => option.value === value);

  return (
    <div className="Select">
      <div className="Select__selectedOption" onClick={handleIsOpened}>
        <span className="Select__label">{label}</span>
        <span className="Select__value">{selectedOption?.label}</span>
        {isOpened && <ul className="Select__options">{options?.map(renderOption)}</ul>}
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  handleSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default Select;
