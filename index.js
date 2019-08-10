import React, { Component } from 'react';
import { render } from 'react-dom';
import Myroute from './Myroute';
import Yourroute from './Yourroute'
import './style.css';
import Products from './mohana/Products'
import Second from './mohana/Second';
import Life from './Life'
import AvgForm from './AvgForm';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Life />, document.getElementById('root'));
