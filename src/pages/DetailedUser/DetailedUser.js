import Tag from "../../components/Tag";
import { NavLink, useParams } from "react-router-dom";
import TextSection from "../../components/TextSection";
import { Gender, Status } from "../../enums";
import {PropTypes} from "prop-types";
import "./DetailedUser.scss";

const DetailedUser = ({ selectedCharacter }) => {
  const { id } = useParams();

  const character = selectedCharacter(Number(id));

  const { name, status, species, type, gender, origin, location, image, episode, url, created, className } =
    character || {};

  return character ? (
    <div className="DetailedUser">
      <div className="DetailedUser__links">
        <NavLink exact to="/" className="DetailedUser__link" activeClassName="DetailedUser__link--active">
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
            <TextSection className="TextSection--dark DetailedUser__textSection" label={"Species:"} value={species} />
            <TextSection
              className="TextSection--dark DetailedUser__textSection"
              label={"Origin:"}
              value={origin.name}
            />
            <TextSection className="TextSection--dark DetailedUser__textSection" label={"Birthday:"} value={created} />
            <TextSection
              className="TextSection--dark DetailedUser__textSection"
              label={"Last known location:"}
              value={location.name}
            />
            <TextSection
              className="TextSection--dark DetailedUser__textSection"
              label={"First seen in:"}
              value={origin.name}
            />
          </div>
          <div className="DetailedUser__episodes">
            <p className="DetailedUser__infoLabel">Episodes:</p>

            <p className="DetailedUser__infoValue">S03E07: The Ricklantis Mixup</p>
            <p className="DetailedUser__infoValue">S01E10: Close Rick-counters of the Rick Kind </p>
            <p className="DetailedUser__infoValue">S03E07: The Ricklantis Mixup</p>
            <p className="DetailedUser__infoValue">S01E10: Close Rick-counters of the Rick Kind </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>No character</div>
  );
};

DetailedUser.propTypes = {
  selectedCharacter: PropTypes.func
};

export default DetailedUser;
