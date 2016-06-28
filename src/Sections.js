/* eslint-disable func-names, no-underscore-dangle */
import React from 'react';
import Seat from './Seat';
// import ShowSeats from './ShowSeats';

export default (props) => {
  const data = props.data;
  const type = props.type;
  return (
    <div>
      <div>Sections - {type}</div>
      {data.map((s) => {
        return (<Seat id={s._id} purchased={s.purchased} />);
      })}
    </div>
  );
};

//  {data.map(s => console.log('seat', s))}
/*
class Sections extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    // this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    fetch('//localhost:3333/')
    .then((response) => response.json())
    .then((sections) => {
      console.log('cwm', sections);
      const data = sections.sections;
      this.setState({ data });
    });
  }

  render() {
    const data = this.state.data;
    console.log('data', data);
    return (
      <div>
        <div>Sections Component</div>
        <div>{data.map(o => <ShowSeats data={o.seats} />)}</div>
      </div>
    );
  }
}

export default Sections;
*/

// <div>type: <input type="text" ref="type" /></div>
// <div>Cost: <input type="number" ref="cost" /></div>
// <div><button onClick={this.submit} >Submit</button></div>
// <div>this.state.seats.map(o,i => {<img src='' id=i />})</div>
// <div>{data.map(o => o.quantity)}</div>
