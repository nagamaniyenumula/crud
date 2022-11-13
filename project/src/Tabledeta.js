import React from 'react';
class Tabledeta extends React.Component {
  constructor() {
    super();
    this.state = {
      a: '',
      b: '',
      emp: [
        { name: 'mani', salary: '60000' },
        { name: 'bagi', salary: '70000' },
      ],
    };
  }
  render() {
    return (
      <div>
        <input placeholder="EnterName" type="text" onChange={this.changename} />
        <input
          placeholder="Entersalary"
          type="text"
          onChange={this.changesalary}
        />
        <button onClick={this.buttonclick}>Submit</button>

        <table border="1">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>salary</th>
          </tr>
          {this.state.emp.map(function (el, i) {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.name}</td>
                <td>{el.salary}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
  changename = (deta) => {
    this.setState({ a: deta.target.value });
  };
  changesalary = (deta) => {
    this.setState({ b: deta.target.value });
  };
  buttonclick = () => {
    this.setState({
      emp: [...this.state0.emp, { name: this.state.a, salary: this.state.b }],
    });
  };
}
export default Tabledeta;
