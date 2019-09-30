import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES
    };
  }
  render() {
    const element = (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
    return (
      <div>
        {element}
        <Menu dishes={this.state.dishes}/>
      </div> 
    );
  }
}

export default App;

