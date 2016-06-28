/*eslint-disable func-names */
import React from 'react';

class ShowSeats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props };
    // this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    fetch('//localhost:3333/section/')
    .then((response) => response.json())
    .then((seats) => {
      console.log('cwm', seats);
      const data = seats.sections;
      this.setState({ data });
    });
  }

  render() {
    const data = this.state.data;
    console.log('Show Seats Data', data);
    return (
      <div>
        <div>ShowSeats Component</div>
        <div>{data.map(o => {console.log(o.type); (<div>{o.type}</div>);})}</div>
      </div>
    );
  }
}

export default ShowSeats;

// <div>type: <input type="text" ref="type" /></div>
// <div>Cost: <input type="number" ref="cost" /></div>
// <div><button onClick={this.submit} >Submit</button></div>
// <div>this.state.seats.map(o,i => {<img src='' id=i />})</div>
