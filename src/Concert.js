/*eslint-disable func-names */
import React from 'react';
import Purchase from './Purchase';

class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sections: [] };
    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    fetch('//localhost:3333/section/')
    .then((response) => response.json())
    .then((data) => {
      const sections = data.sections;
      this.setState({ sections });
    });
  }

  submit() {
    const quantity = this.refs.quantity.value;
    const cost = this.refs.cost.value;
    const type = this.refs.type.value;
    fetch('//localhost:3333/section/', { method: 'post', body: JSON.stringify({ quantity, cost, type }), headers: {"Content-Type": "application/json"} })
    .then((r) => { return r.json(); })
    .then((data) => {
      const sections = data.sections;
      this.setState({ sections });
    });
  }

  render() {
    return (
      <div>
        <div>Seat Component</div>
        <div>Quantity: <input type="number" ref="quantity" /></div>
        <div>type: <input type="text" ref="type" /></div>
        <div>Cost: <input type="number" ref="cost" /></div>
        <div><button onClick={this.submit} >Submit</button></div>
        <div><Purchase sections={this.state.sections} /></div>
      </div>
    );
  }
}

export default Seat;
