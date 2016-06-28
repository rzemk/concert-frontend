/*eslint-disable func-names */
import React from 'react';

class Chair extends React.Component {
  constructor(props) {
    super(props);
    const id = props.id;
    const purchased = props.purchased;
    this.state = { id, purchased };
    this.update = this.update.bind(this);
  }

  update() {
    const purchased = !this.state.purchased;
    const id = this.state.id;
    fetch('//localhost:3333/seat/', { method: 'post', body: JSON.stringify({ id, purchased }), headers: {"Content-Type": "application/json"} })
    .then((r) => { return r.json(); })
    .then(() => {
      this.setState({ purchased });
    });
  }

  render() {
    const purchased = this.state.purchased;
    let bText = 'purchase';
    if (purchased) {
      bText = 'sell';
    }
    return (<button onClick={this.update} style={{ background: 'lightblue' }}>{bText}</button>);
  }
}

export default Chair;
