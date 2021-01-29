import { PropTypes } from "prop-types";
import Tag from "../Tag";
import { Link } from "react-router-dom";
import TextSection from "../TextSection";
import { Gender, Status } from "../../enums";

import "./Card.scss";

const Card = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
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
        <TextSection label={"Last known location:"} value={location.name} />
        <TextSection label={"First seen in:"} value={origin.name} />
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
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
  episode: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default Card;
