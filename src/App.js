import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { useStateValue } from "./StateProvider";
import Login from "./Login.js";

const App = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <React.Fragment>
          <Router>
            <NavigationBar />
            {/* <Jumbotron /> */}
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/News" component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
