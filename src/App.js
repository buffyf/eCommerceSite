import React, { Component } from 'react';
import BaseLayout from "./container/BaseLayout"
import Contact from "./container/Contact";
import HairCare from "./container/HairCare";
import About from "./container/About";
import Home from "./container/Home";
import MakeUp from "./container/MakeUp";
import SkinCare from "./container/SkinCare";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HairCareDetail from './components/HairCareDetail';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/haircare/:id" component={HairCareDetail}></Route>
              <Route path="/haircare" component={HairCare}></Route>
              <Route path="/makeup" component={MakeUp}></Route>
              <Route path="/skinCare" component={SkinCare}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;