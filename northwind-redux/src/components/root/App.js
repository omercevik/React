import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import CartDetail from '../cart/CartDetail';
import Navi from "../navi/Navi"
import Dashboard from './Dashboard';


function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/product" exact component={Dashboard}></Route>
          <Route path="/cart" exact component={CartDetail}></Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
