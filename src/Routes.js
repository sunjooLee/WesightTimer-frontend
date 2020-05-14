import React from "react";
import Main from "./pages/Main";
import Playlist from "./pages/ListedPlayer";
import PlayListPage from './pages/PlayListPage';
import PopularPage from "./pages/PopularPage";
import Player from "./pages/Player";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/playlist" component={Playlist} />
          <Route exact path="/playlistpage" component={PlayListPage} />
          <Route exact path="/popularpage" component={PopularPage} />
          <Route exact path="/playlist/:id" component={Player} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
