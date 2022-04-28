// //STATE DISTRUCTURING
// import React from "react";
// export class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   onHandleClick() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1 onClick={() => this.onHandleClick()}>I'm a {this.state.count}</h1>
//       </div>
//     );
//   }
// }
import React from "react";
export class Counter extends React.Component {
  state = {
    count: 0
  };
  onHandleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <h1 onClick={() => this.onHandleClick()}>I'm a {this.state.count}</h1>
      </div>
    );
  }
}
