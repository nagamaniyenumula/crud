import React from 'react';

class Sample extends React.Component {
  constructor() {
    super();
    this.state = { name: 'enter', Friends: ['mani', 'bagi'] };
  }
  render() {
    return (
      <div>
        <input placeholder="EnterName" type="text" onChange={this.changedeta}/>
        <button onClick={this.buttonclick}>Submit</button>
        <ul>
          {this.state.Friends.map(function (el, i) {
            return <li key="i">{el}</li>;
          })}
        </ul>
      </div>
    );
  }
  buttonclick = () => {
    this.setState({ Friends: [...this.state.Friends, this.state.name] });
  };
  changedeta = (deta) => {
    this.setState({ name: deta.target.value });
  };
}
export default Sample;
