import { useState, useCallback } from "react";
import { PropTypes } from "prop-types";
import _ from "lodash";
import Select from "../../components/Select";
import Search from "../../components/Search";
import Hero from "../../components/Hero";
import CardsList from "../../components/CardsList";
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

const Home = () => {
  const [name, setName] = useState("");
  const [queryName, setQueryName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const delayedQuery = useCallback(_.debounce(setQueryName, 500), [
    setQueryName,
  ]);

  const onNameChange = (value) => {
    setName(value);
    delayedQuery(value);
  };

  return (
    <div className="Home">
      <Hero />
      <div className="Home__search">
        <Search setValue={onNameChange} value={name} />
      </div>
      <div className="Home__filters">
        <Select
          label="Status:"
          value={status}
          handleSelect={setStatus}
          options={statusOptions}
        />
        <Select
          label="Gender:"
          value={gender}
          handleSelect={setGender}
          options={genderOptions}
        />
      </div>
      <div className="Home__resultContainer">
        <CardsList gender={gender} name={queryName} status={status} />
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
