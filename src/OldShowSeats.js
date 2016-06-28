/* eslint-disable func-names, array-callback-return, no-unused-expressions */
import React from 'react';
import Sections from './Sections';

class ShowSeats extends React.Component {
  constructor(props) {
    super(props);
    console.log('show data', props.sections);
    const sections = props.sections;
    this.state = { data: sections };
    // this.submit = this.submit.bind(this);
  }


  render() {
    const data = this.state.data;
    console.log('Show Seats Data', data);
    return (
      <div>
        {data.map((s) => {
          return (<Sections data={s.seats} type={s.type} />);
        })}
      </div>
    );
  }
}

export default ShowSeats;

// <div>type: <input type="text" ref="type" /></div>
// <div>Cost: <input type="number" ref="cost" /></div>
// <div><button onClick={this.submit} >Submit</button></div>
// <div>this.state.seats.map(o,i => {<img src='' id=i />})</div>
