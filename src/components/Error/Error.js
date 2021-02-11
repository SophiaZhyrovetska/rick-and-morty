import { PropTypes } from "prop-types";
import "./Error.scss";

const Error = ({ errorText }) => {
  return (
    <div className="Error">
      <p className="Error__text">{errorText}</p>
    </div>
  );
};

Error.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export default Error;
