import React, { Component } from 'react';
import { render } from 'react-dom';
import Myroute from './Myroute';
import Yourroute from './Yourroute'
import './style.css';
import Products from './mohana/Products'
import Second from './mohana/Second';
import Life from './Life'
import AvgForm from './AvgForm';
import Myprovider from './MyProvider';
import Exp1 from './Exp1'
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

render(<Exp1 />, document.getElementById('root'));
