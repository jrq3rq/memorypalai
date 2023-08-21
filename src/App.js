import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { useStateValue } from "./StateProvider";
import Login from "./Login";
import NavigationBar from "./components/NavigationBar";
import DataUploadCard from "./pages/Upload";
import styled from "styled-components";
import { NoMatch } from "./pages/NoMatch";

const Container = styled.div`
  height: 100vh;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const App = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <NavigationBar />
            <Switch>
              <Route exact path="/roadmap" component={Home} />
              <Route path="/" component={DataUploadCard} />
              {/* <Route component={NoMatch} /> */}
              <Redirect to="/" />
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
};

export default App;
