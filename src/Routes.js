import React from "react";
import Main from "./pages/Main";
import UnloggedInMain from "./pages/UnloggedInMain";
import Playlist from "./pages/ListedPlayer";
import PlayListPage from './pages/PlayListPage';
import PopularPage from "./pages/PopularPage";
import Player from "./pages/Player";
import StressMusic from "./pages/StressMusic";
import StressDetail from "./pages/StressDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={UnloggedInMain} />
          <Route exact path="/playlist" component={Playlist} />
          <Route exact path="/playlistpage" component={PlayListPage} />
          <Route exact path="/popularpage" component={PopularPage} />
          <Route exact path="/playlist/:id" component={Player} />
          <Route exact path="/stress" component={StressMusic} />
          <Route exact path="/stressDetail" component={StressDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
