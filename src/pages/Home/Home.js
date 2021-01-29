import Select from "../../components/Select";
import Search from "../../components/Search";
import { useState } from "react";
import Hero from "../../components/Hero";
import CardsList from "../../components/CardsList";
import Pagination from "../../components/Pagination";
import { PropTypes } from "prop-types";
import "./Home.scss";

const statusOptions = [
  { value: "", label: "All statuses" },
  { value: "Alive", label: "Alive" },
  { value: "Dead", label: "Dead" },
];

const genderOptions = [
  { value: "", label: "All genders" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const Home = ({ characters }) => {
  const [characterName, setCharacterName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const filterCharacters = () => {
    let filteredCharacters = [...characters];

    if (gender.length !== 0) filteredCharacters = characters.filter((character) => character.gender === gender);
    if (status.length !== 0) filteredCharacters = filteredCharacters.filter((character) => character.status === status);
    if (characterName.length !== 0)
      filteredCharacters = filteredCharacters.filter((character) =>
        character.name.toLowerCase().includes(characterName.toLowerCase())
      );

    return filteredCharacters;
  };

  return (
    <div className="Home">
      <Hero />
      <div className="Home__search">
        <Search setValue={setCharacterName} value={characterName} />
      </div>
      <div className="Home__filters">
        <Select label="Status:" value={status} handleSelect={setStatus} options={statusOptions} />
        <Select label="Gender:" value={gender} handleSelect={setGender} options={genderOptions} />
      </div>
      <div className="Home__resultContainer">
        <CardsList characters={filterCharacters(characters)} />
      </div>
      <div className="Home__pagination">
        <Pagination />
      </div>
    </div>
  );
};

Home.propTypes = {
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
  ),
};

export default Home;
