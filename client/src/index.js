// // eslint-disable-next-line
// import React from 'react';
// // eslint-disable-next-line
// import ReactDOM from 'react-dom';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// // import { gql } from '@apollo/client';
// import { ApolloProvider } from '@apollo/client';
// import { useQuery, gql } from '@apollo/client';
// import Dogs from './dogs.jsx';
// import DogPhoto from './dogphoto.jsx';
// import { BrowserRouter } from 'react-router-dom';

// const client = new ApolloClient({
//     uri: 'https://48p1r2roz4.sse.codesandbox.io',
//     cache: new InMemoryCache()
//   });

// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;

// function ExchangeRates() {
//   const { loading, error, data } = useQuery(EXCHANGE_RATES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({ currency, rate }) => (
//     <div key={currency}>
//       <p>
//         {currency}: {rate}
//       </p>
//     </div>
//   ));
// }

// function App() {
//   return (
//     <BrowserRouter>
//     <ApolloProvider client={client}>
//       <div>
//         <h2>My first Apollo app <span role="img">🚀</span></h2>
//         <div><Dogs /></div>
//         <div><DogPhoto breed="bulldog"/></div>
//         <div><ExchangeRates /></div>
//       </div>
//     </ApolloProvider>
//     </BrowserRouter>

//   );
// }

// // render(<App />, document.getElementById('root'));

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// // import Hello_comp from './test.jsx';

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import Hello from './test.jsx';

// // ReactDOM.render(
// //     <Hello msg="Hello, from Guru99 Tutorials!" />,
// //     document.getElementById('root')
// // ); 

// // import COMP_LIFE from './complife.jsx';

// // import Form from './form.jsx';

// // ReactDOM.render(
// //     <Form />,
// //     document.getElementById('root')
// // ); 


// // import EventTest from './events.jsx';

// // ReactDOM.render(
// //     <EventTest />,
// //     document.getElementById('root')
// // ); 

// // Working with Inline CSS in ReactJS

// // import Hello_comp from './addstyle.jsx';


// // client
// // .query({
// // query: gql`
// //     query GetRates {
// //     rates(currency: "USD") {
// //         currency
// //     }
// //     }
// // `
// // })
// // .then(result => console.log(result));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import {
//   ApolloClient,
//   ApolloProvider,
//   createHttpLink,
//   InMemoryCache,
//   split
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { getMainDefinition } from '@apollo/client/utilities';
// import App from './components/App';
// import { AUTH_TOKEN } from './constants';
// import * as serviceWorker from './serviceWorker';
// import './css/index.css';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000'
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem(AUTH_TOKEN);
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   };
// });

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:4000/graphql`,
//   options: {
//     reconnect: true,
//     connectionParams: {
//       authToken: localStorage.getItem(AUTH_TOKEN)
//     }
//   }
// });

// const link = split(
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query);
//     return (
//       kind === 'OperationDefinition' &&
//       operation === 'subscription'
//     );
//   },
//   wsLink,
//   authLink.concat(httpLink)
// );

// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache()
// });

// ReactDOM.render(
//   <BrowserRouter>
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );
// serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();