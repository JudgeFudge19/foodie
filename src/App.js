import React, { Component } from "react";
import { Router } from "@reach/router";
import reducer from "./reducer";
import { dal } from "./database";
import { HomePage, LoginPage } from "./pages";

const placeholderStock = Array(6)
  .fill({ name: "Loading...", quantity: "" })
  .reduce((a, c, i) => {
    a[i + 1] = c;
    return a;
  }, {});

class App extends Component {
  state = {
    stock: {},
    order: {},
    async: {
      fetching: false,
      success: false,
      error: false
    }
  };

  componentDidMount() {
    dal.fetchMealsThunk(this.dispatch);
  }

  dispatch = action => {
    this.setState(prevState => reducer(prevState, action));
  };

  render() {
    const { fetching } = this.state.async;
    const stockData = fetching ? placeholderStock : this.state.stock;
    const stock = Object.values(stockData);
    const order = Object.values(this.state.order);

    return (
      <Router>
        <HomePage
          path="/"
          orderData={order}
          stockData={stock}
          dispatch={this.dispatch}
        />
        <LoginPage path="login" dispatch={this.dispatch} />
      </Router>
    );
  }
}

export default App;
