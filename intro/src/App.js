import React, {Component} from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container, Row, Col} from "reactstrap"
import alertify from "alertifyjs"
import { Switch, Route } from 'react-router-dom';
import NotFound from "./NotFound"
import CartList from "./CartList"
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

export default class App extends Component 
{
  state = {currentCategory:"", products:[], cart:[]}

  changeCategory = (category)=>{
      this.setState({currentCategory:category.author})
      this.getProducts(category.id);
  }

  componentDidMount()
  {
      this.getProducts();
  }

  getProducts = id =>
  {
      let url ="http://localhost:3000/products";
      if(id)
      {
        url += "?id=" + id;
      }
      fetch(url)
      .then(response=>response.json())
      .then(data=>this.setState({products:data}));
  }

  addToCart = (product)=>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(c=>c.product.id === product.id);
    if(addedItem)
      addedItem.quantity += 1;
    else
      newCart.push({product:product, quantity:1});
    this.setState({cart:newCart});
    alertify.success(product.author + " added to cart!", 2);
  }

  removeFromCart = (product)=>{
    let newCart = this.state.cart.filter(c=>c.product.id!==product.id);
    this.setState({cart:newCart});
    alertify.error(product.author + " removed from cart!", 2);

  }

  render()
  {
    let productInfo = {title: "ProductList"}
    let categoryInfo = {title: "CategoryList"}
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}></Navi>
          <Row>
            <Col xs="3">
              <CategoryList 
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
              info={categoryInfo}>

              </CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render ={
                  props=>(
                    <ProductList 
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}
                    addToCart={this.addToCart}/>
                  )
                }/>
                <Route exact path="/cart"  render ={
                  props=>(
                    <CartList 
                    {...props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}/>
                  )
                }/>
                <Route path="/form1" component={FormDemo1}></Route>
                <Route path="/form2" component={FormDemo2}></Route>
                <Route component={NotFound}/>
              </Switch>
      
            </Col>
          </Row>
        </Container>
       </div>
    );
  }
  
}

