import React, { Component } from 'react';
import BaseLayout from "./container/BaseLayout"
import Contact from "./container/Contact";
import ProductLine from "./container/ProductLine";
import About from "./container/About";
import Home from "./container/Home";
import Cart from "./container/Cart"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetail from './components/ProductDetail';

import './styles/App.css';
import './styles/bootstrap.css';
import './styles/style.css';
// import './styles/images/logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path='/cart' component={Cart} />
              <Route path="/:productline/:id" component={ProductDetail}></Route>
              <Route exact path="/:productline" component={ProductLine}></Route>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;