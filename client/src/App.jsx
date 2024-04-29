import {Outlet} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: '/graphql',
});
import './App.css'
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {


  return (
    <div style={{border: "1px solid black"}}>
    <ApolloProvider client={client}>
      <Header/>
      <Outlet/>
      <Footer/>
    </ApolloProvider>
    </div>
  )
}

export default App
