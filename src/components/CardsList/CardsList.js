import Card from "../../components/Card";
import { PropTypes } from "prop-types";
import "./CardsList.scss";

const CardsList = ({ characters }) => {
  const renderCharacter = (character) => <Card className="CardsList__card" key={character.id} {...character} />;

  return <div className="CardsList">{characters?.map(renderCharacter)}</div>;
};

CardsList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  )
};

export default CardsList;
