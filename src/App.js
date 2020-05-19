import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {Query} from  'react-apollo';  
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';
import { render } from 'react-dom';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');
    
    this.setState({ users: res.data, loading: false })
  }

  render() { 
    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }

}

// const TOKEN = '0729fecf872a32e34cbc427a4aed35036a3a2c03'; // <-- TODO: place your token here

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.github.com/graphql',
//     headers: {
//       Authorization: `token ${TOKEN}`,
//     },
//   }),
//   cache: new InMemoryCache(),
// });

// function queryResponse() {
//   const myQuery = gql`
//   query {
//     viewer{
//       login
//       name
//         repositories(first: ){
//             nodes{
//                 name
//             }
//         }
//     }
//   }
// `;

//   client.query ({
//   query: gql
// }).then(response => console.log(response.data.feed))
// }

// class App extends Component {

//   render() {
//     return (
//       <ApolloProvider client={client}>
//         <div className="App">
//           <h1>Find a repository</h1>
//           <div className="cover">
//           <form method="get" action="">
//             <div className="tb">
//               <div className="td"><input type="text" placeholder="Search" required/></div>
//               <div className="td" id="s-cover">
//                 <button type="submit" onClick={queryResponse}>
//                   <div id="s-circle"></div>
//                   <span></span>
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//         </div>
//       </ApolloProvider>
//     );
//   }
// }

export default App;
