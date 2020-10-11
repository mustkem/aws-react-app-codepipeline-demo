import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/style/index.scss";

import { Provider } from "react-redux";
import appStore from "./store/store";

import Layout from "./Components/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ModalForm from "./Pages/ModalForm";

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/modal-form">
                <ModalForm />
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
