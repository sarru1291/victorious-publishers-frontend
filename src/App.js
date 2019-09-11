import React from "react";
import Layout from "./hoc/layout/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={Home} />
          <Route path="/journals" exact component={Home} />
          <Route path="/events" exact component={Home} />
          <Route path="/authors" exact component={Home} />
          <Route path="/about" exact component={Home} />
          <Route path="/contact" exact component={Home} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
