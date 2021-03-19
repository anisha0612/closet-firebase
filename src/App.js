import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className='App'>
        {/* <Header currentUser={currentUser} /> */}
        <Switch>
          <Route exact path='/' component={Homepage} />
          {/* <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
