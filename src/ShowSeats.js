/* eslint-disable func-names, array-callback-return, no-unused-expressions */
import React from 'react';
import Sections from './Sections';

export default (props) => {
  const data = props.sections;
  return (
    <div>
      {data.map((s) => {
        return (<Sections data={s.seats} type={s.type} />);
      })}
    </div>
  );
};

// <div>type: <input type="text" ref="type" /></div>
// <div>Cost: <input type="number" ref="cost" /></div>
// <div><button onClick={this.submit} >Submit</button></div>
// <div>this.state.seats.map(o,i => {<img src='' id=i />})</div>
