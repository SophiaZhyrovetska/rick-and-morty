import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import "./Header.scss";

function Header() {
  const quotes = [
    "Listen Morty, I hate to break it to you, but what people call “love” is just a chemical reaction that compels animals to breed.",
    "I'm a scientist; because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it.",
    "Honey, stop raising your father's cholesterol so you can take a hot funeral selfie.",
    "Sometimes science is more art than science.",
    "Now if you'll excuse me, I've got a quick solo adventure to go on and this one will not be directed by Ron Howard.",
    "Wubba Lubba Dub Dub!",
    "The universe is basically an animal. It grazes on the ordinary. It creates infinite idiots just to eat them.",
    "To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you...",
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  const changeQuote = () => {
    const nextQuoteIndex =
      quoteIndex === quotes.length - 1 ? 0 : quoteIndex + 1;
    setQuoteIndex(nextQuoteIndex);
  };

  useEffect(() => {
    setTimeout(changeQuote, 15000);
  }, [quoteIndex]);

  return (
    <div className="Header">
      <Link to="/" className="Header__logoContainer">
        <Logo className="Header__logo" />
      </Link>
      <span className="Header__quote">{quotes[quoteIndex]}</span>
    </div>
  );
}

export default Header;
