import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import DetailedUser from "./pages/DetailedUser";
import DetailedEpisode from "./pages/DetailedEpisode";
import Header from "./components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <Header />
          <Switch>
            <Route path="/character/:id">
              <DetailedUser />
            </Route>
            <Route path="/episode/:id">
              <DetailedEpisode />
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
