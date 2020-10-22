import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from '../src/pages/landing/landing'
import Header from '../src/pages/landing/header'
import About from '../src/pages/about/about'
import Story from '../src/pages/story/story'
import Blog from '../src/pages/blog/blog'
import Store from '../src/pages/store/store'
import Features from '../src/pages/features/features'
import SubNav from '../src/pages/sub-nav/subNav'
function App() {

  return (
    <Router>
    <div className="App"
    style={{
      minHeight:`40vh`
    }}>
     
        <Header />
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/about' component={About} />
            <Route path='/story' component={Story} />
            <Route path='/blog' component={Blog} />
            <Route path='/store' component={Store} />
            <Route path='/features' component={Features} />
            <Route path='/subnav' component={SubNav} />
          </Switch>
    </div>
    </Router>
  );
}

export default App;
