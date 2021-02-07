import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { getCharacters } from "../../api";
import Card from "../../components/Card";
import Pagination from "../Pagination";
import "./CardsList.scss";

const CardsList = ({ status, gender, name }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState();
  const [pages, setPages] = useState(0);

  useEffect(() => {
    loadCharacters(currentPage, {
      ...(name && { name }),
      ...(gender && { gender }),
      ...(status && { status }),
    });
  }, [name, gender, status, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [name, status, gender]);

  const loadCharacters = async (page = 0, params) => {
    const items = await getCharacters({ page: page + 1, ...params });
    if (items.error) {
      setCharacters([]);
    } else {
      setCharacters(items?.results);
      setPages(items?.info?.pages || 0);
    }
  };

  const renderCharacter = (character) => (
    <Card className="CardsList__card" key={character.id} {...character} />
  );

  return (
    <div className="CardsList">
      <div className="CardsList__cardsContainer">
        {characters?.map(renderCharacter)}
      </div>
      <Pagination
        className="CardsList__pagination"
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />{" "}
    </div>
  );
};

CardsList.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default CardsList;
