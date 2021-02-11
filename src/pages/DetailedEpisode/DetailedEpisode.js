import { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { getCharactersByIds, getEpisode } from "../../api";
import TextSection from "../../components/TextSection";
import Error from "../../components/Error";
import "./DetailedEpisode.scss";

const DetailedEpisode = () => {
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [episodeCharacters, setEpisodeCharacters] = useState();

  const { id } = useParams();

  useEffect(() => {
    loadEpisode(id);
  }, [id]);

  const loadEpisode = async (id) => {
    const item = await getEpisode(id);
    if (!item.error) {
      setSelectedEpisode(item);
      const charactersIds = item.characters?.map((character) =>
        Number(character.substring(character.lastIndexOf("/") + 1))
      );
      loadCharacters(charactersIds);
    }
  };

  const loadCharacters = async (charactersIds) => {
    const items = await getCharactersByIds(charactersIds);
    if (items.error) {
      setEpisodeCharacters([]);
    } else {
      setEpisodeCharacters(items);
    }
  };

  const getCharacterName = (character, index) => (
    <Link
      key={index}
      className="TextSection__value"
      to={`/character/${character.id}`}
    >
      {character.name}
    </Link>
  );

  const { air_date, episode, name } = selectedEpisode || {};

  return selectedEpisode ? (
    <div className="DetailedEpisode">
      <div className="DetailedEpisode__links">
        <NavLink
          exact
          to="/"
          className="DetailedEpisode__link"
          activeClassName="DetailedEpisode__link--active"
        >
          <span>Home</span>
        </NavLink>
        <span className="DetailedEpisode__separator">|</span>
        <NavLink
          exact
          to={`/episode/${id}`}
          className="DetailedEpisode__link"
          activeClassName="DetailedEpisode__link--active"
        >
          <span>Episode: #{episode}</span>
        </NavLink>
      </div>
      <div className="DetailedEpisode__container">
        <div className="DetailedEpisode__content">
          <div className="DetailedEpisode__number">
            <h2>#{episode}</h2>
          </div>

          <div className="DetailedEpisode__description">
            <h1 className="DetailedEpisode__title">{name}</h1>
            <div className="DetailedEpisode__info">
              <TextSection
                className="TextSection DetailedEpisode__textSection"
                label={"Air date: "}
              >
                {[air_date]}
              </TextSection>
            </div>
            <div className="DetailedEpisode__characters">
              <TextSection
                className="TextSection DetailedEpisode__textSection"
                label={"Characters: "}
              >
                {episodeCharacters?.slice(0, 10).map(getCharacterName)}
              </TextSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Error errorText={"No such episode :("} />
  );
};

export default DetailedEpisode;
