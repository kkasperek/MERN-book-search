import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Bookshelf from "./pages/bookshelf";
import Search from "./pages/search";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/bookshelf" component={Bookshelf} />
      <Route exact path="/search" component={Search} />

    </div>
  </Router>
);

export default App;
