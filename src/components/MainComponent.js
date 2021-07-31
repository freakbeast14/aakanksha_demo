import React, { Component } from "react";
import { commerce } from "../lib/commerce";
import Cart from "./Cart";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LoginForm from "./form_components/LoginForm";
// import SignUpForm from "./form_components/SignUpForm";
import MaterialUiLoginForm from "./MaterialUiLoginForm";
import MaterialUiSignUpForm from "./MaterialUiSignUpForm";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: true,
      cart: {},
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleEmptyCart = this.handleEmptyCart.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
    this.fetchCart();
  }

  fetchProducts() {
    commerce.products
      .list()
      .then((products) => {
        this.setState({ products: products.data, loading: false });
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  }

  fetchCart() {
    commerce.cart
      .retrieve()
      .then((cart) => {
        this.setState({ cart });
      })
      .catch((error) => {
        console.error("There was an error fetching the cart", error);
      });
  }

  handleAddToCart(productId, quantity) {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        this.setState({ cart: item.cart });
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart", error);
      });
  }

  handleUpdateCartQty(lineItemId, quantity) {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        this.setState({ cart: resp.cart });
      })
      .catch((error) => {
        console.log("There was an error updating the cart items", error);
      });
  }

  handleRemoveFromCart(lineItemId) {
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        this.setState({
          cart: resp.cart,
        });
      })
      .catch((error) => {
        console.error(
          "There was an error removing the item from the cart",
          error
        );
      });
  }

  handleEmptyCart() {
    commerce.cart
      .empty()
      .then((resp) => {
        this.setState({ cart: resp.cart });
      })
      .catch((error) => {
        console.error("There was an error emptying the cart", error);
      });
  }

  render() {
    const { products, loading, cart } = this.state;
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home
                cart={cart}
                products={products}
                onAddToCart={this.handleAddToCart}
                loading={loading}
              />
            </Route>
            <Route exact path="/cart">
              <Cart
                cart={cart}
                onUpdateCartQty={this.handleUpdateCartQty}
                onRemoveFromCart={this.handleRemoveFromCart}
                onEmptyCart={this.handleEmptyCart}
              />
            </Route>
            <Route exact path="/login">
              <MaterialUiLoginForm />
            </Route>
            <Route exact path="/signup">
              <MaterialUiSignUpForm />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Main;
