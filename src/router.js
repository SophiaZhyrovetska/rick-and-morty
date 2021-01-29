import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import DetailedUser from "./pages/DetailedUser";
import Header from "./components/Header";
import characters from "./assets/json/stubCharacters.json";

const Router = () => {
  const charactersList = characters.results;

  const getUserById = (id) => charactersList.find(character => character.id === id);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home characters={charactersList} />
        </Route>
        <Route exact path="*">
          <Header />
          <Switch>
            <Route path="/character/:id">
              <DetailedUser selectedCharacter={getUserById}/>
            </Route>
            <Route exact path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
