import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/configureStore";
// import Registration from './components/Registration/Registration';
import NavBar from "./components/NavBar/NavBar";
import MainScreenContainer from './containers/MainScreen/MainScreenContainer';
import DisplayCartItemsContainer from './containers/DisplayCartItems/DisplayCartItemsContainer';
import Registration from './components/Registration/Registration';
import CheckOutPage from './components/CheckOutPage/CheckOutPage'
// import ProductCard from './reusable/ProductCard/ProductCard'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
          <Route exact path="/" component={MainScreenContainer} />
          <Route path="/cart" component={DisplayCartItemsContainer} />
          <Route path="/register" component={Registration}/>
          <Route path="/checkout" component={CheckOutPage}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
