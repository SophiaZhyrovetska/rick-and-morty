import { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { getCharacter, getEpisodes } from "../../api";
import { Gender, Status } from "../../enums";
import Tag from "../../components/Tag";
import TextSection from "../../components/TextSection";
import Error from "../../components/Error";
import "./DetailedUser.scss";

const DetailedUser = () => {
  const [character, setCharacter] = useState();
  const [episodes, setEpisodes] = useState();

  const { id } = useParams();

  useEffect(() => {
    loadCharacter(id);
  }, [id]);

  const loadCharacter = async (id) => {
    const item = await getCharacter(id);
    if (!item.error) {
      setCharacter(item);
      const episodesIds = item.episode?.map((episode) =>
          Number(episode.substring(episode.lastIndexOf("/") + 1))
      );
      loadEpisodes(episodesIds);
    }
  };

  const loadEpisodes = async (episodesIds) => {
    const items = await getEpisodes(episodesIds);
    if (items.error) {
      setEpisodes([]);
    } else {
      setEpisodes(items);
    }
  };

  const { name, status, species, gender, origin, location, image, created } =
    character || {};

  const birthdayDate = new Date(created);

  const getEpisodeName = (episode, index) => (
    <Link
      key={index}
      className="TextSection__value"
      to={`/episode/${episode.id}`}
    >
      {episode.episode}: {episode.name}
    </Link>
  );

  return character ? (
    <div className="DetailedUser">
      <div className="DetailedUser__links">
        <NavLink
          exact
          to="/"
          className="DetailedUser__link"
          activeClassName="DetailedUser__link--active"
        >
          <span>Home</span>
        </NavLink>
        <span className="DetailedUser__separator">|</span>
        <NavLink
          exact
          to={`/character/${id}`}
          className="DetailedUser__link"
          activeClassName="DetailedUser__link--active"
        >
          <span>
            #{id} {name}
          </span>
        </NavLink>
      </div>
      <div className="DetailedUser__container">
        <div className="DetailedUser__content">
          <div className="DetailedUser__image">
            <img src={image} />
          </div>

          <div className="DetailedUser__description">
            <h1 className="DetailedUser__title">
              #{id} {name}
            </h1>
            <div className="DetailedUser__tags">
              <Tag className="Card__tag">
                {Status[status]}
                {status}
              </Tag>
              <Tag className="Card__tag">
                {Gender[gender]}
                {gender}
              </Tag>
            </div>
            <div className="DetailedUser__info">
              <TextSection
                className="TextSection DetailedUser__textSection"
                label={"Species: "}
              >
                {[species]}
              </TextSection>

              <TextSection
                className="TextSection DetailedUser__textSection"
                label={"Origin: "}
              >
                {[origin.name]}
              </TextSection>

              <TextSection
                className="TextSection DetailedUser__textSection"
                label={"Birthday: "}
              >
                {[birthdayDate.toDateString()]}
              </TextSection>

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
            <div className="DetailedUser__episodes">
              <TextSection
                className="TextSection DetailedUser__textSection"
                label={"Episodes: "}
              >
                {episodes?.slice(0, 10).map(getEpisodeName)}
              </TextSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Error errorText={"No such character :("} />
  );
};

export default DetailedUser;
