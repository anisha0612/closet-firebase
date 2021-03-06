import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage.jsx";
import Header from "./components/Header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  render() {
    // const { currentUser } = this.state;
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
