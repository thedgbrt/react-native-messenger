// @flow
import React from 'react';
import ApolloClient, {
  createNetworkInterface
} from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { config } from '../config';
import App from './App';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: config.GRAPHQL_ENDPOINT })
});

const AppProvider = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);

export default AppProvider;
