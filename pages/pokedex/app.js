import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from 'apollo-boost';
import Profile from './[pokemon]';



export default function App() {

  const client  = new ApolloClient({
    uri : "https://graphql-pokemon2.vercel.app",
   
     })

  return <ApolloProvider client={client} >
  <Profile></Profile>
  </ApolloProvider>
}
