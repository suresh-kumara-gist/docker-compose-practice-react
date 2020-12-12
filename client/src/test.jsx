// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

// function Hello(props) {
//     return <h1>{props.msg}</h1>;
// }  

// const Hello_comp = <Hello msg="Hello, from Guru99 Tutorials!" />;
// export default Hello_comp;

// import React from 'react';
// import ReactDOM from 'react-dom';
// Initialization, Mounting, Update, and UnMounting
class Hello extends React.Component {
  render() {
    return <h1>{this.props.msg}</h1>;
  }
}
export default Hello;
