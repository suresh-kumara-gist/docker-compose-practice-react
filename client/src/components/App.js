// import React, { Component } from 'react';

// import logo from './logo.svg';

// import './App.scss';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {};
//   }

//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState(res))
//       .catch(console.error);
//   }

//   callApi = async () => {
//     const resp = await fetch('/api');

//     window._resp = resp;

//     let text = await resp.text();

//     let data = null;
//     try {
//       data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
//     } catch (e) {
//       console.err(`Invalid json\n${e}`);
//     }

//     if (resp.status !== 200) {
//       throw Error(data ? data.message : 'No data');
//     }

//     return data;
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>{this.state.message || 'No message'}</p>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route
            exact
            path="/create"
            component={CreateLink}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
