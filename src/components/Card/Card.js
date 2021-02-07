import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Gender, Status } from "../../enums";
import Tag from "../Tag";
import TextSection from "../TextSection";

import "./Card.scss";

const Card = ({
  id,
  name,
  status,
  gender,
  origin,
  location,
  image,
  className,
}) => {
  return (
    <div className={`Card ${className}`}>
      <div className="Card__imageHolder">
        <Link to={`/character/${id}`}>
          <img className="Card__image" src={image} />
        </Link>
      </div>

      <div className="Card__content">
        <Link to={`/character/${id}`} className="Card__name">
          <h1>{name}</h1>
        </Link>
        <div className="Card__tags">
          <Tag className="Card__tag">
            {Status[status]}
            {status}
          </Tag>
          <Tag className="Card__tag">
            {Gender[gender]}
            {gender}
          </Tag>
        </div>
        <TextSection
          className="TextSection DetailedUser__textSection"
          label={"Last known location: "}
        >
          {[location.name]}
        </TextSection>
        <TextSection
          className="TextSection DetailedUser__textSection"
          label={"First seen in: "}
        >
          {[origin.name]}
        </TextSection>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  origin: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;
