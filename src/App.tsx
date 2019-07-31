import React, { lazy, Suspense } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./app.css";
import styled from "@emotion/styled";
import { faGamepad, faTv, faFilm, faSearch, faRandom } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
library.add(faGamepad, faTv, faFilm, faSearch, faRandom);
const Movie = lazy(() => import("./components/Elements/Movie/Movie"));
const Game = lazy(() => import("./components/Elements/Game/Game"));
const Television = lazy(() => import("./components/Elements/Television/Television"));
const Number = lazy(() => import("./components/Elements/Number/Number"));

const Container = styled.main`
  margin: 0 auto;
  width: 65vw;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Suspense fallback={<div>AOSDJKASOIPDJASDOIPASDJIASDIOPASDJIOPASOIJD</div>}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/movie" component={Movie} />
            <Route exact path="/tv show" component={Television} />
            <Route exact path="/number" component={Number} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
