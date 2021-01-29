import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="Hero">
      <h1 className="Hero__header">
        <span>surf the</span>
        <Logo className="Hero__logo" />
        <span>universe</span>
      </h1>
    </section>
  );
};

export default Hero;
